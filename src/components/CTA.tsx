import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { bookFreeCall } from '../utils/placeholderAPI';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let's find 3 tasks we can 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> automate</span> in your business this month.
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free 30-minute consultation where we'll identify automation opportunities 
            and show you exactly how AI can save your team time.
          </p>
          
          <button
            onClick={bookFreeCall}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <Calendar className="w-6 h-6" />
            Book a Free Call
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <div className="mt-8 text-sm text-gray-400">
            📞 Free consultation • 💡 No commitment • ⚡ Instant value
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;