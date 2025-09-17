import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <CTA />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-blue-600 rounded-lg p-2">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="font-bold text-xl">ZentrLabs</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building the future of business automation with AI and modern web technologies.
            </p>
            <div className="text-sm text-gray-500">
              ©ZentrLabs 2025 AI Agency. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;