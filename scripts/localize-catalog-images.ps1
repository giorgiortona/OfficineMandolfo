param(
  [switch]$ReplaceFailuresWithPlaceholder
)

$ErrorActionPreference = 'Stop'
$workspaceRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$catalogPath = [IO.Path]::GetFullPath((Join-Path $workspaceRoot 'src\data\catalog.js'))
$outputDirectory = [IO.Path]::GetFullPath((Join-Path $workspaceRoot 'public\images\catalog'))

if (-not $catalogPath.StartsWith($workspaceRoot, [StringComparison]::OrdinalIgnoreCase)) {
  throw 'Il catalogo risolto non appartiene al workspace.'
}

if (-not $outputDirectory.StartsWith($workspaceRoot, [StringComparison]::OrdinalIgnoreCase)) {
  throw 'La directory di destinazione risolta non appartiene al workspace.'
}

New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$catalogContent = Get-Content -LiteralPath $catalogPath -Raw
$matches = [regex]::Matches($catalogContent, 'img:\s*"(https?://[^"]+)"')
$urls = $matches | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$downloaded = 0
$reused = 0
$failed = [Collections.Generic.List[string]]::new()

foreach ($url in $urls) {
  $hashBytes = [Security.Cryptography.SHA256]::HashData(
    [Text.Encoding]::UTF8.GetBytes($url)
  )
  $hash = [Convert]::ToHexString($hashBytes).Substring(0, 16).ToLowerInvariant()
  $existingFile = Get-ChildItem -LiteralPath $outputDirectory -Filter "catalog-$hash.*" |
    Select-Object -First 1

  if ($existingFile) {
    $localUrl = "/images/catalog/$($existingFile.Name)"
    $catalogContent = $catalogContent.Replace($url, $localUrl)
    $reused++
    continue
  }

  $temporaryPath = Join-Path $outputDirectory ".download-$hash.tmp"

  try {
    $requestOptions = @{
      Uri = $url
      OutFile = $temporaryPath
      PassThru = $true
      MaximumRedirection = 8
      MaximumRetryCount = 2
      ConnectionTimeoutSeconds = 20
      OperationTimeoutSeconds = 60
      UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140.0 Safari/537.36'
    }
    $response = Invoke-WebRequest @requestOptions

    $mediaType = ($response.Headers['Content-Type'] -split ';')[0].Trim().ToLowerInvariant()
    $extension = switch ($mediaType) {
      'image/jpeg' { 'jpg' }
      'image/png' { 'png' }
      'image/webp' { 'webp' }
      'image/avif' { 'avif' }
      'image/gif' { 'gif' }
      default { throw "Formato non supportato: $mediaType" }
    }

    $destinationPath = Join-Path $outputDirectory "catalog-$hash.$extension"
    Move-Item -LiteralPath $temporaryPath -Destination $destinationPath
    $catalogContent = $catalogContent.Replace(
      $url,
      "/images/catalog/catalog-$hash.$extension"
    )
    $downloaded++
  } catch {
    if (Test-Path -LiteralPath $temporaryPath) {
      Remove-Item -LiteralPath $temporaryPath
    }

    $failed.Add("$url | $($_.Exception.Message)")

    if ($ReplaceFailuresWithPlaceholder) {
      $quotedUrl = 'img: ' + [char]34 + $url + [char]34
      $catalogContent = $catalogContent.Replace($quotedUrl, 'img: null')
    }
  }
}

[IO.File]::WriteAllText(
  $catalogPath,
  $catalogContent,
  [Text.UTF8Encoding]::new($false)
)

[PSCustomObject]@{
  Downloaded = $downloaded
  Reused = $reused
  Failed = $failed.Count
  ExternalImagesRemaining = [regex]::Matches(
    $catalogContent,
    'img:\s*"https?://'
  ).Count
} | Format-List

if ($failed.Count -gt 0) {
  'Download non riusciti:'
  $failed
}
