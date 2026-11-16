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
        height={96}
        strength={2}
        layers={4}
        curve="bezier"
        exponential
        opacity={0.6}
        zIndex={90}
        autoHide
      />
    </>
  );
}
