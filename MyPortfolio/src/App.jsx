import { Navbar } from "./Navbar.jsx";
import { Hero } from "./sections/Hero.jsx";
import { About } from "./sections/About.jsx";
import { Experience } from "./sections/Experience.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Testimonials } from "./sections/Testimonials.jsx";
import { Contact } from "./sections/Contact.jsx";


function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <div className="max-w-7xl mx-auto">
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </div>

      </main>
      <footer className="border-t border-border mt-20 py-8 text-center text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Satyam Pandit.
        </p>
        <p className="mt-2 text-sm">
          Built with React & Tailwind CSS 🚀
        </p>
      </footer>

    </div>
  );
}

export default App;