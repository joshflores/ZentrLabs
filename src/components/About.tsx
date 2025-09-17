import React from 'react';
import { Code, Server, Cloud, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Us
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            We specialize in building apps fast and integrating AI to save businesses time.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 w-fit mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Full-Stack Development</h3>
              {/*<p className="text-gray-600 text-sm">React, TypeScript, C#, .NET</p>*/}
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl p-4 w-fit mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Backend Systems</h3>
              {/*<p className="text-gray-600 text-sm">ASP.NET Core, SQL Server, APIs</p>*/}
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 w-fit mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cloud & AI</h3>
              {/*<p className="text-gray-600 text-sm">Azure, OpenAI, AI integrations</p>*/}
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-4 w-fit mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Automation</h3>
              {/*<p className="text-gray-600 text-sm">Workflows, bots, integrations</p>*/}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              We focus on rapid development and practical AI implementation. Our goal is to deliver working solutions quickly, 
              then iterate based on real-world usage. We believe in building apps that solve actual business problems, 
              not just showcasing the latest technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;