import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { SectionHeading } from "./components/ui/SectionHeading";

const sections = [
  { id: "work", index: "02", title: "Избранные работы" },
  { id: "about", index: "03", title: "Обо мне" },
  { id: "services", index: "04", title: "Услуги и навыки" },
  { id: "contact", index: "05", title: "Контакты" },
] as const;

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <section className="section hero" id="top">
          <div className="shell">
            <SectionHeading index="01" title="Hero" />
          </div>
        </section>
        {sections.map((section) => (
          <section className="section" id={section.id} key={section.id}>
            <div className="shell">
              <SectionHeading index={section.index} title={section.title} />
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
