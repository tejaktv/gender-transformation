import React from 'react';
import { BookOpen, Users, Heart, Shield, Calendar, FileText, Stethoscope, Scale, Brain, Globe, Lock, Award } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: Stethoscope,
      title: "Medical Guidance",
      description: "Evidence-based medical support for hormone therapy, surgical procedures, and comprehensive healthcare planning",
      color: "blue",
      features: ["HRT Protocols", "Surgical Planning", "Recovery Support", "Specialist Network"],
      badge: "Medical"
    },
    {
      icon: Scale,
      title: "Legal Support",
      description: "Expert guidance through legal documentation, name changes, and gender marker updates with privacy protection",
      color: "amber",
      features: ["Document Updates", "Legal Rights", "Court Procedures", "Privacy Protection"],
      badge: "Legal"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Specialized therapy, support groups, and mental wellness resources tailored to your unique journey",
      color: "green",
      features: ["Therapy Matching", "Support Groups", "Crisis Support", "Wellness Tools"],
      badge: "Mental Health"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with peers, mentors, and allies in a safe, supportive, and inclusive environment",
      color: "purple",
      features: ["Peer Support", "Local Groups", "Online Forums", "Mentorship"],
      badge: "Community"
    },
    {
      icon: Calendar,
      title: "Care Coordination",
      description: "Seamless appointment scheduling and care coordination with our network of specialized providers",
      color: "indigo",
      features: ["Provider Matching", "Appointment Booking", "Follow-up Care", "Care Coordination"],
      badge: "Care"
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "Enterprise-grade security with HIPAA compliance, ensuring your privacy and data protection",
      color: "gray",
      features: ["HIPAA Compliant", "Data Encryption", "Secure Messaging", "Privacy Controls"],
      badge: "Security"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      amber: "bg-amber-100 text-amber-700 border-amber-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
      gray: "bg-gray-100 text-gray-700 border-gray-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: "bg-blue-600 text-white",
      amber: "bg-amber-600 text-white",
      green: "bg-green-600 text-white",
      purple: "bg-purple-600 text-white",
      indigo: "bg-indigo-600 text-white",
      gray: "bg-gray-600 text-white"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="resources" className="section-padding bg-white">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Comprehensive Care</span>
          </div>
          
          <h2 className="text-balance mb-6">
            Professional Resources for Every
            <span className="text-gradient block">Step of Your Journey</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access evidence-based resources, expert guidance, and compassionate support designed by healthcare professionals 
            who understand the unique challenges and opportunities of gender transition.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div 
                key={index}
                className="card-elevated p-8 group hover:border-blue-200 transition-all duration-300"
              >
                {/* Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getBadgeColor(resource.color)}`}>
                  {resource.badge}
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(resource.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {resource.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full btn-secondary group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"></div>
          <div className="absolute inset-0 bg-pattern opacity-20"></div>
          
          <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">Ready to Begin Your Professional Care Journey?</h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join thousands of individuals who have found expert guidance, compassionate support, and comprehensive care 
                on their path to authentic living. Our team of healthcare professionals is here to support you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-accent text-lg px-8 py-4">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 text-lg">
                  Schedule Consultation
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-8 border-t border-blue-700">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-amber-400" />
                  <span className="text-blue-100">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-amber-400" />
                  <span className="text-blue-100">Board Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-amber-400" />
                  <span className="text-blue-100">Compassionate Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;