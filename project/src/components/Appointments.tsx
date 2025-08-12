import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin, Video, Phone, CheckCircle, Shield, Award, Star, ArrowRight } from 'lucide-react';

const Appointments = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('video');

  const services = [
    {
      id: 'consultation',
      name: 'Initial Consultation',
      duration: '60 min',
      price: 'Free',
      description: 'Comprehensive assessment and personalized care planning',
      icon: User,
      popular: true
    },
    {
      id: 'therapy',
      name: 'Mental Health Support',
      duration: '50 min',
      price: '₹10,000',
      description: 'Individual therapy with specialized counselors',
      icon: User,
      popular: false
    },
    {
      id: 'medical',
      name: 'Medical Consultation',
      duration: '45 min',
      price: '₹12,500',
      description: 'HRT consultation and medical guidance',
      icon: User,
      popular: false
    },
    {
      id: 'legal',
      name: 'Legal Support',
      duration: '30 min',
      price: '₹16,500',
      description: 'Name change and legal documentation support',
      icon: User,
      popular: false
    },
    {
      id: 'support',
      name: 'Support Group',
      duration: '90 min',
      price: 'Free',
      description: 'Peer support and community connection',
      icon: User,
      popular: false
    }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30'
  ];

  const providers = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Endocrinologist",
      rating: 4.9,
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Michael Rodriguez",
      specialty: "Clinical Psychologist",
      rating: 4.8,
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f7a5b16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Maria Santos",
      specialty: "Legal Advisor",
      rating: 4.9,
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1594824475544-505b6a63c8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="appointments" className="section-padding bg-white">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="h-4 w-4" />
            <span>Book Your Appointment</span>
          </div>
          
          <h2 className="text-balance mb-6">
            Professional Care
            <span className="text-gradient block">When You Need It</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Connect with our specialized healthcare providers, therapists, and legal experts 
            who understand your journey and are committed to providing compassionate, 
            evidence-based care in a safe and affirming environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="card-elevated p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold text-gray-900">Schedule Your Visit</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>HIPAA Compliant</span>
                </div>
              </div>
              
              {/* Service Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Service
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          selectedService === service.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                        }`}
                      >
                        {service.popular && (
                          <div className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                            Most Popular
                          </div>
                        )}
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-gray-900">{service.name}</h4>
                          <span className="text-blue-600 font-bold text-lg">{service.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-2" />
                          {service.duration}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Appointment Type */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Appointment Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={() => setAppointmentType('video')}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      appointmentType === 'video'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Video className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">Video Call</div>
                        <div className="text-sm text-gray-600">Secure online consultation</div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setAppointmentType('phone')}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      appointmentType === 'phone'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">Phone Call</div>
                        <div className="text-sm text-gray-600">Traditional consultation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any specific concerns, questions, or preferences you'd like to share..."
                ></textarea>
              </div>

              <button className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2">
                <span>Schedule Appointment</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Featured Providers */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Featured Providers</h3>
              <div className="space-y-6">
                {providers.map((provider, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{provider.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">{provider.specialty}</p>
                      <p className="text-xs text-gray-500 mb-2">{provider.experience}</p>
                      <div className="flex items-center">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < Math.floor(provider.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">{provider.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="font-semibold text-green-800 text-lg">Secure & Private</h3>
              </div>
              <ul className="text-sm text-green-700 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>End-to-end encrypted communications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>HIPAA compliant platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Confidential appointment records</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure payment processing</span>
                </li>
              </ul>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-semibold text-red-800 mb-4 text-lg">Need Immediate Help?</h3>
              <p className="text-sm text-red-700 mb-4">
                If you're experiencing a crisis, please reach out immediately:
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-red-700">
                  <Phone className="h-4 w-4 mr-3 text-red-600" />
                  <div>
                    <div className="font-medium">Crisis Line</div>
                    <div className="text-red-600 font-bold">988</div>
                  </div>
                </div>
                <div className="flex items-center text-red-700">
                  <Phone className="h-4 w-4 mr-3 text-red-600" />
                  <div>
                    <div className="font-medium">Trans Lifeline</div>
                    <div className="text-red-600 font-bold">877-565-8860</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="font-semibold text-blue-800 text-lg">Why Choose TransCare?</h3>
              </div>
              <div className="space-y-3 text-sm text-blue-700">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Board-certified specialists</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Evidence-based care</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Compassionate support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <span>24/7 availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;