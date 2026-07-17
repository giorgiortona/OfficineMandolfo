import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import './index.css'
import App from './App.jsx'

if (import.meta.env.DEV) {
  window.gsap = gsap
  // Nei tab in background il browser sospende requestAnimationFrame e GSAP
  // si ferma: teniamo vivo il ticker per poter verificare la pagina in anteprima.
  setInterval(() => {
    if (document.hidden) gsap.ticker.tick()
  }, 50)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
