import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Shield, Award, Clock, Globe } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Medical Consultation', href: '#medical' },
      { name: 'Mental Health Support', href: '#mental-health' },
      { name: 'Care Coordination', href: '#care-coordination' },
      { name: 'Legal Support', href: '#legal' }
    ],
    resources: [
      { name: 'Transition Guides', href: '#guides' },
      { name: 'Healthcare Resources', href: '#healthcare' },
      { name: 'Community Support', href: '#community' },
      { name: 'Educational Content', href: '#education' }
    ],
    support: [
      { name: '24/7 Crisis Support', href: '#crisis' },
      { name: 'Live Chat', href: '#chat' },
      { name: 'AI Assistant', href: '#ai' },
      { name: 'Support Groups', href: '#groups' }
    ],
    company: [
      { name: 'About TransCare', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press & Media', href: '#press' }
    ]
  };

  const trustIndicators = [
    { icon: Shield, text: "HIPAA Compliant", color: "text-blue-400" },
    { icon: Award, text: "Board Certified", color: "text-amber-400" },
    { icon: Clock, text: "24/7 Available", color: "text-green-400" },
    { icon: Globe, text: "Worldwide Support", color: "text-purple-400" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-width py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-600 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">TransCare</h3>
                <p className="text-sm text-gray-400 font-medium">Professional Transition Support</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Providing comprehensive, evidence-based healthcare services and compassionate support 
              for individuals throughout their gender transition journey. Your health, dignity, and 
              well-being are our top priorities.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-amber-400" />
                <span>support@transcare.org</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-amber-400" />
                <span>1-800-TRANS-CARE</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-amber-400" />
                <span>Available Worldwide</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon className={`h-4 w-4 ${indicator.color}`} />
                    <span className="text-xs text-gray-400">{indicator.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm leading-relaxed"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm leading-relaxed"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Company */}
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Support</h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors text-sm leading-relaxed"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors text-sm leading-relaxed"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-800/30 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h4 className="font-bold text-red-300 mb-2 text-xl">24/7 Crisis Support Available</h4>
              <p className="text-red-200 text-sm">
                If you're experiencing a crisis, these resources are available around the clock
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-red-900/30 rounded-xl p-4 border border-red-800/30">
                <div className="text-red-300 text-sm mb-1">National Suicide Prevention</div>
                <div className="text-white font-bold text-lg">988</div>
                <div className="text-red-200 text-xs">24/7 Crisis Support</div>
              </div>
              <div className="bg-red-900/30 rounded-xl p-4 border border-red-800/30">
                <div className="text-red-300 text-sm mb-1">Trans Lifeline</div>
                <div className="text-white font-bold text-lg">877-565-8860</div>
                <div className="text-red-200 text-xs">Peer Support Hotline</div>
              </div>
              <div className="bg-red-900/30 rounded-xl p-4 border border-red-800/30">
                <div className="text-red-300 text-sm mb-1">Crisis Text Line</div>
                <div className="text-white font-bold text-lg">Text HOME to 741741</div>
                <div className="text-red-200 text-xs">Free Crisis Support</div>
              </div>
              <div className="bg-red-900/30 rounded-xl p-4 border border-red-800/30">
                <div className="text-red-300 text-sm mb-1">Trevor Project</div>
                <div className="text-white font-bold text-lg">1-866-488-7386</div>
                <div className="text-red-200 text-xs">LGBTQ+ Youth Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-4">Stay Updated with TransCare</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get the latest healthcare insights, transition resources, and community updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="btn-accent px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-gray-800 rounded-lg">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-gray-800 rounded-lg">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-gray-800 rounded-lg">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-gray-800 rounded-lg">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 TransCare. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-4 mt-2 text-xs text-gray-500">
              <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#accessibility" className="hover:text-amber-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;