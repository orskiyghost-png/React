import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { SelectedWork } from "./components/sections/SelectedWork";
import { Services } from "./components/sections/Services";
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
    </>
  );
}
