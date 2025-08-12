import React from 'react';
import { ArrowRight, Shield, Heart, Users, CheckCircle, Star, Award } from 'lucide-react';

const Hero = () => {
  const trustIndicators = [
    { icon: Shield, text: "HIPAA Compliant", color: "text-blue-600" },
    { icon: Heart, text: "Compassionate Care", color: "text-amber-600" },
    { icon: Users, text: "Expert Team", color: "text-green-600" }
  ];

  const stats = [
    { number: "10,000+", label: "Lives Supported" },
    { number: "500+", label: "Healthcare Partners" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-amber-50 section-padding overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-60"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-40 h-40 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-green-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-width relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 text-amber-500" />
              <span>Trusted by 10,000+ individuals</span>
            </div>

            <h1 className="text-balance mb-6">
              Professional Support for Your
              <span className="text-gradient block">Gender Transition Journey</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl lg:max-w-none">
              Experience compassionate, evidence-based care from our team of specialized healthcare professionals. 
              We provide comprehensive support for every step of your transition with the highest standards of medical excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="btn-secondary text-lg px-8 py-4">
                Book Free Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon;
                return (
                  <div key={index} className="flex flex-col items-center lg:items-start">
                    <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                      <Icon className={`h-6 w-6 ${indicator.color}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center lg:text-left">
                      {indicator.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-blue-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image & Content */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
<img 
  src="https://thumbs.dreamstime.com/b/human-face-made-different-portrait-men-women-diverse-age-race-combination-faces-concept-social-equality-rights-freedom-281749794.jpg" 
  alt="Professional healthcare consultation"
  className="w-full h-96 object-cover"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating Info Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 transform rotate-2 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">24/7 Support</div>
                    <div className="text-xs text-gray-600">Always here for you</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-2 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Board Certified</div>
                    <div className="text-xs text-gray-600">Expert care team</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6 border border-gray-100 max-w-xs">
              <div className="flex items-center space-x-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-3 italic">
                "The care and support I received here changed my life. Professional, compassionate, and truly understanding."
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-amber-600 rounded-full"></div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-xs text-gray-600">Verified Patient</div>
                </div>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="absolute top-8 -right-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full p-3 shadow-lg">
              <Award className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;