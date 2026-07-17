import { useCallback, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Catalog from "./components/Catalog.jsx";
import Showroom from "./components/Showroom.jsx";
import Configurator from "./components/Configurator.jsx";
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderDone = useCallback(() => {
    window.__introDone = true;
    window.dispatchEvent(new Event("preloader:done"));
    setLoading(false);
  }, []);

  // Scroll morbido per le ancore interne via GSAP: il CSS scroll-behavior:smooth
  // è incompatibile con ScrollTrigger.refresh() (salta in cima alla pagina).
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 70 },
        duration: 0.8,
        ease: "power2.inOut",
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {loading && <Preloader onDone={handlePreloaderDone} />}
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Catalog />
      <Showroom />
      <Configurator />
      <Footer />
    </>
  );
}
