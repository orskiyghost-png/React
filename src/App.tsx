import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { SelectedWork } from "./components/sections/SelectedWork";
import { Services } from "./components/sections/Services";
import { GradualBlur } from "./components/reactbits/GradualBlur";
import { useReveal } from "./lib/useReveal";

export default function App() {
  useReveal();

  // Позиции ScrollTrigger зависят от шрифтов и картинок: пересчитываем после загрузки.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    const timers = [window.setTimeout(refresh, 300), window.setTimeout(refresh, 1200)];
    window.addEventListener("load", refresh);
    void document.fonts?.ready.then(refresh).catch(() => {});
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />

      {/* Блюр-градиент только сверху: контент не сливается с шапкой */}
      <GradualBlur
        className="gradual-blur-top"
        position="top"
        target="page"
        height={72}
        strength={1.2}
        layers={3}
        curve="bezier"
        exponential
        opacity={0.4}
        zIndex={90}
        autoHide
      />
    </>
  );
}
