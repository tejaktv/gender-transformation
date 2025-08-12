import React from 'react';
import { Users, Award, Heart, Shield, Star, CheckCircle, Globe, Clock } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical Director",
      specialty: "Endocrinology & Hormone Therapy",
      credentials: "MD, PhD, FACP",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Mental Health Director",
      specialty: "Clinical Psychology & Gender Identity",
      credentials: "PhD, ABPP",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f7a5b16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Surgical Coordinator",
      specialty: "Plastic & Reconstructive Surgery",
      credentials: "MD, FACS",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1594824475544-505b6a63c8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide care with empathy, understanding, and respect for every individual's unique journey"
    },
    {
      icon: Shield,
      title: "Medical Excellence",
      description: "Evidence-based practices and the highest standards of medical care and safety"
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Creating a safe, welcoming environment where everyone feels valued and supported"
    },
    {
      icon: Award,
      title: "Professional Integrity",
      description: "Maintaining the highest ethical standards and professional conduct in all we do"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience", icon: Clock },
    { number: "10,000+", label: "Lives Supported", icon: Heart },
    { number: "500+", label: "Healthcare Partners", icon: Users },
    { number: "99%", label: "Patient Satisfaction", icon: Star }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            <span>About TransCare</span>
          </div>
          
          <h2 className="text-balance mb-6">
            Leading Healthcare
            <span className="text-gradient block">Excellence in Transition Care</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            TransCare is a premier healthcare organization dedicated to providing comprehensive, 
            evidence-based medical services for individuals undergoing gender transition. Our team 
            of board-certified specialists combines medical expertise with compassionate care.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="inline-flex p-4 rounded-xl mb-6 bg-blue-100 text-blue-700">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              To provide exceptional, comprehensive healthcare services that support individuals 
              throughout their gender transition journey, ensuring access to evidence-based medical 
              care, mental health support, and community resources.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Evidence-based medical care</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Compassionate mental health support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Comprehensive care coordination</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="inline-flex p-4 rounded-xl mb-6 bg-amber-100 text-amber-700">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              To be the leading healthcare provider for gender transition care, setting the standard 
              for medical excellence, patient-centered care, and community support worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Global healthcare leadership</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Innovation in transition care</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Community empowerment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our board-certified healthcare professionals bring decades of combined experience 
              in gender transition care, ensuring you receive the highest quality medical treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-elevated p-8 text-center group hover:border-blue-200 transition-all duration-300">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-blue-200 transition-colors"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {member.experience}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-lg font-semibold text-blue-700 mb-1">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.specialty}</p>
                <p className="text-sm font-medium text-gray-500 mb-4">{member.credentials}</p>
                
                <button className="btn-secondary text-sm px-4 py-2">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do, ensuring the highest quality 
              of care and support for our patients and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-6 rounded-2xl mb-6 bg-blue-100 text-blue-700 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-20"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-12">TransCare by the Numbers</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex p-4 rounded-full mb-4 bg-white/20">
                      <Icon className="h-8 w-8 text-amber-400" />
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience TransCare?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of individuals who have found expert care, compassionate support, 
              and a welcoming community at TransCare. Your journey to authentic living starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Schedule Consultation
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;