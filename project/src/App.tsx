import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Resources from './components/Resources';
import Support from './components/Support';
import Stories from './components/Stories';
import Blog from './components/Blog';
import Appointments from './components/Appointments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stories />
      <Resources />
      <Support />
      <Blog />
      <Appointments />
      <Footer />
    </div>
  );
}

export default App;
