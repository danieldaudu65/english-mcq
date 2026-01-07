import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections

import Hero from "./components/Hero";
import About from "./components/About";
import Author from "./components/Author";
import Pricing from "./components/Pricing";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import ChapterCarousel from "./components/Chapter";
import Testimonials from "./components/Testimnoials";

function App() {
  return (
    <div className="bg-[#05070A] text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main className="pt-15">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="chapters">
          <ChapterCarousel />
        </section>

        <section id="pricing">
          <Testimonials />
        </section>
        <section id="author">
          <Author />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
