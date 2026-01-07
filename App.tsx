
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Internships from './components/Internships';
import TechStack from './components/TechStack';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-blue-100 selection:text-blue-900">
      <Header scrolled={scrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-24">
          <About />
        </section>

        <section id="services" className="py-24 bg-white">
          <Services />
        </section>

        <section id="internships" className="py-24">
          <Internships />
        </section>

        <section id="tech" className="py-24 bg-white">
          <TechStack />
        </section>

        <section id="why-us" className="py-24">
          <WhyUs />
        </section>

        <section id="testimonials" className="py-24 bg-[#0f172a] text-white">
          <Testimonials />
        </section>

        <section id="contact" className="py-24">
          <ContactForm />
        </section>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
