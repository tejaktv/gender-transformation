import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock, Send, Bot, Shield, Users, Award, Heart } from 'lucide-react';

const Support = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Connect instantly with our trained healthcare counselors for immediate assistance",
      availability: "24/7 Available",
      action: "Start Chat",
      color: "blue",
      response: "< 1 minute"
    },
    {
      icon: Phone,
      title: "Crisis Hotline",
      description: "Immediate professional support when you need it most",
      availability: "24/7 Emergency",
      action: "Call Now",
      color: "red",
      response: "Immediate"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed responses from our healthcare professionals",
      availability: "Response in 24h",
      action: "Send Email",
      color: "amber",
      response: "24 hours"
    },
    {
      icon: Bot,
      title: "AI Healthcare Assistant",
      description: "Instant answers to medical and transition-related questions",
      availability: "Always Online",
      action: "Ask AI",
      color: "green",
      response: "Instant"
    }
  ];

  const emergencyResources = [
    {
      name: "Crisis Text Line",
      contact: "Text HOME to 741741",
      description: "Free, 24/7 crisis support via text",
      type: "Crisis"
    },
    {
      name: "Trans Lifeline",
      contact: "877-565-8860",
      description: "Peer support hotline for transgender individuals",
      type: "Peer Support"
    },
    {
      name: "National Suicide Prevention",
      contact: "988",
      description: "24/7 crisis support and intervention",
      type: "Crisis"
    },
    {
      name: "Trevor Project",
      contact: "1-866-488-7386",
      description: "Crisis intervention for LGBTQ+ youth",
      type: "Youth Support"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      red: "bg-red-100 text-red-700 border-red-200",
      amber: "bg-amber-100 text-amber-700 border-amber-200",
      green: "bg-green-100 text-green-700 border-green-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="support" className="section-padding bg-white">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            <span>24/7 Support Available</span>
          </div>
          
          <h2 className="text-balance mb-6">
            Professional Support
            <span className="text-gradient block">When You Need It Most</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access multiple levels of professional support designed to meet your needs at every stage of your journey. 
            Our trained healthcare professionals and AI-powered tools provide compassionate, evidence-based assistance.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div key={index} className="card-elevated p-8 text-center group hover:border-blue-200 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(option.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {option.description}
                </p>
                
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-green-600 font-medium">
                    {option.availability}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-6">
                  <div className="text-xs text-gray-500 mb-1">Response Time</div>
                  <div className="text-sm font-semibold text-gray-900">{option.response}</div>
                </div>
                
                <button className="w-full btn-secondary group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  {option.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Emergency Resources */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-3xl p-8 mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Phone className="h-4 w-4" />
              <span>Emergency Resources</span>
            </div>
            <h3 className="text-2xl font-bold text-red-900 mb-2">Crisis Support Available 24/7</h3>
            <p className="text-red-700 max-w-2xl mx-auto">
              If you're experiencing a crisis or need immediate support, these resources are available around the clock.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{resource.name}</h4>
                <p className="text-lg font-bold text-red-600 mb-2">{resource.contact}</p>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Chat Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Healthcare Assistant</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get instant answers to medical questions, transition guidance, and emotional support with our 
              advanced AI healthcare assistant.
            </p>
          </div>

          <div className="card-elevated overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">TransCare AI Assistant</h4>
                    <p className="text-blue-100">Healthcare Support Specialist</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Online & Ready</span>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="p-6 min-h-[300px] bg-gray-50">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="bg-white rounded-lg p-4 max-w-md shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-800">
                      Hello! I'm your TransCare AI healthcare assistant. I can help with medical questions, 
                      transition resources, emotional support, and connecting you with our care team. 
                      How can I assist you today?
                    </p>
                  </div>
                </div>
                
                <div className="text-center text-gray-500 text-sm py-4">
                  <p>This AI assistant provides evidence-based healthcare information and emotional support</p>
                  <p className="mt-1">All conversations are private and HIPAA compliant</p>
                </div>
              </div>
            </div>
            
            {/* Chat Input */}
            <div className="p-6 bg-white border-t border-gray-100">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask about medical guidance, resources, or emotional support..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="btn-primary px-6">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Trained Professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;