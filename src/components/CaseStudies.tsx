import React from 'react';
import { TrendingUp, Clock, Calendar } from 'lucide-react';
import { CaseStudy } from '../types';

const caseStudies: CaseStudy[] = [
  {
    title: "Email Automation for Real Estate",
    description: "Automated follow-up emails saved 10 hrs/week",
    metric: "10 hours",
    impacts: ["saved weekly", "20% higher client response rate"]
  },
  {
    title: "AI Booking System",
    description: "AI scheduler reduced missed bookings by 30%",
    metric: "30%",
    impacts: ["fewer missed bookings", "15% revenue increase"]
  },
  {
    title: "Data Processing for Finance",
    description: "AI pipeline processed invoices 5x faster with 99% accuracy",
    metric: "5x",
    impacts: ["faster invoice handling", "reduced manual errors by 80%"]
  },
  {
    title: "Customer Support Chatbot",
    description: "Deployed AI chatbot to handle FAQs, deflecting 40% of tickets",
    metric: "40%",
    impacts: ["support tickets automated", "average response time cut by 60%"]
  },
  {
    title: "Sales Report Generator",
    description: "Automated weekly sales reports, cutting 6 hrs of manual work",
    metric: "6 hours",
    impacts: ["saved weekly", "reports delivered every Monday automatically"]
  }
];


const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses save time and increase efficiency with AI-powered solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3">
                  {index === 0 ? (
                    <Clock className="w-6 h-6 text-white" />
                  ) : (
                    <Calendar className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{study.description}</p>
              
              <div className="flex flex-col gap-2 text-emerald-600 font-semibold">
               <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-2xl font-bold">{study.metric}</span>
                </div>
                {study.impacts.map((impact, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    <span>{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Coming Soon Card */}
          <div className="md:col-span-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 text-center border-2 border-dashed border-gray-300">
            <div className="bg-gray-300 rounded-xl p-3 w-fit mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">More Case Studies Coming Soon</h3>
            <p className="text-gray-600">No current clients, be the next! Book a consultation with us to see if we can automate parts of your business!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;