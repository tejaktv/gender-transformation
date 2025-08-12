import React, { useState } from 'react';
import { Menu, X, Globe, User, Heart, Shield, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'pt', name: 'Português' }
  ];

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Resources', href: '#resources' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#appointments' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container-width">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>24/7 Support: (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-amber-400" />
                <span>HIPAA Compliant & Secure</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <select 
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="bg-transparent border border-blue-700 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-amber-400"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code} className="bg-blue-900 text-white">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container-width">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img src="/new-logo.png" alt="Gender Transformation Logo" className="h-16 w-auto object-contain" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm uppercase tracking-wide relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="btn-primary text-sm px-4 py-2">
                Book Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className="text-gray-700 hover:text-blue-700 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <select 
                    value={currentLang}
                    onChange={(e) => setCurrentLang(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                  </select>
                  <button className="w-full btn-primary">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
