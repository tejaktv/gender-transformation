import React from 'react';
import { Stethoscope, Heart, Users, Shield, Calendar, Award, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Medical Consultation",
      description: "Comprehensive medical evaluations and personalized treatment plans with board-certified specialists",
      features: ["Hormone Therapy", "Surgical Planning", "Medical Monitoring", "Specialist Referrals"],
      price: "From ₹12,500",
      duration: "60-90 min",
      badge: "Most Popular"
    },
    {
      icon: Heart,
      title: "Mental Health Support",
      description: "Specialized therapy and counseling services tailored to your unique transition journey",
      features: ["Individual Therapy", "Group Sessions", "Crisis Support", "Wellness Planning"],
      price: "From ₹10,000",
      duration: "50 min",
      badge: "Recommended"
    },
    {
      icon: Users,
      title: "Care Coordination",
      description: "Seamless coordination between healthcare providers, insurance, and support services",
      features: ["Provider Matching", "Insurance Navigation", "Appointment Scheduling", "Follow-up Care"],
      price: "From ₹16,500",
      duration: "Ongoing",
      badge: "Essential"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your privacy and data security are our top priorities"
    },
    {
      icon: Award,
      title: "Board Certified",
      description: "All providers are licensed and certified specialists"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Appointments available 7 days a week, including evenings"
    },
    {
      icon: CheckCircle,
      title: "Insurance Accepted",
      description: "We work with most major insurance providers"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Stethoscope className="h-4 w-4" />
            <span>Professional Services</span>
          </div>
          
          <h2 className="text-balance mb-6">
            Comprehensive Healthcare
            <span className="text-gradient block">Services & Support</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access professional, evidence-based healthcare services designed specifically for gender transition support. 
            Our team of specialists provides compassionate, comprehensive care in a safe and affirming environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="card-elevated p-8 relative group hover:border-blue-200 transition-all duration-300"
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute -top-3 left-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl mb-6 bg-blue-100 text-blue-700 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing & Duration */}
                <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-blue-900">{service.price}</div>
                    <div className="text-sm text-gray-600">per session</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{service.duration}</div>
                    <div className="text-xs text-gray-600">duration</div>
                  </div>
                </div>
                
                <button className="w-full btn-primary">
                  Book Consultation
                </button>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality care with the utmost respect for your privacy, dignity, and individual needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 rounded-xl mb-4 bg-blue-100 text-blue-700 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule your first consultation and take the first step toward comprehensive, professional care. 
              Our team is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;