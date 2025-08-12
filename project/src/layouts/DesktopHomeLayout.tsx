import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Resources from '../components/Resources';
import Stories from '../components/Stories';
import Support from '../components/Support';
import Blog from '../components/Blog';
import Appointments from '../components/Appointments';
import Footer from '../components/Footer';

const DesktopHomeLayout: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['hero', 'resources', 'stories', 'support', 'blog', 'appointments'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
style={{ backgroundImage: "url('https://media.istockphoto.com/id/1991099614/vector/transgender-person-gender-identity-man-and-woman-male-female-sex-change-lgbtq-pride-month.jpg?s=612x612&w=0&k=20&c=HOYaFEvQ5dYvYi-J_LFKzPxoKMUCbmTizEMpsHakg8A=')" }}
    >
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 space-y-2">
        {[
          { id: 'hero', label: 'Home' },
          { id: 'resources', label: 'Resources' },
          { id: 'stories', label: 'Stories' },
          { id: 'support', label: 'Support' },
          { id: 'blog', label: 'Blog' },
          { id: 'appointments', label: 'Book' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-xs font-bold ${
              activeSection === item.id
                ? 'bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/50'
                : 'bg-white/10 border-white/20 text-white/60 hover:bg-white/20'
            }`}
          >
            {item.label.charAt(0)}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div className="relative">
        <div className="sticky top-1 z-30">
          <Header />
        </div>

        <section id="hero">
          <Hero />
        </section>

        <section id="resources" className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Resources />
          </div>
        </section>

        <section id="stories" className="relative py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Stories />
          </div>
        </section>

        <section id="support" className="relative py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Support />
          </div>
        </section>

        <section id="blog" className="relative py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Blog />
          </div>
        </section>

        <section id="appointments" className="relative py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Appointments />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default DesktopHomeLayout;
