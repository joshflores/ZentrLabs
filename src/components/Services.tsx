import React from 'react';
import { Bot, Smartphone, Puzzle, Package } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "AI Automations",
    description: "Streamline repetitive tasks with intelligent automation",
    icon: "Bot",
    features: ["Automated email sequences", "Smart data entry", "Customer support bots", "Document processing"]
  },
  {
    title: "Web & Mobile Apps",
    description: "Custom applications built for your specific needs",
    icon: "Smartphone", 
    features: ["MVP development", "Admin dashboards", "Customer portals", "Mobile-responsive design"]
  },
  {
    title: "AI Integrations",
    description: "Connect AI services with your existing systems",
    icon: "Puzzle",
    features: ["OpenAI API integration", "Azure AI services", "CRM connections", "SQL database AI"]
  },
  {
    title: "Templates & Starter Kits",
    description: "Ready-to-deploy solutions for common business needs",
    icon: "Package",
    features: ["SaaS starter templates", "E-commerce solutions", "Booking systems", "Workflow templates"]
  }
];

const getIcon = (iconName: string) => {
  const icons = {
    Bot: Bot,
    Smartphone: Smartphone,
    Puzzle: Puzzle,
    Package: Package
  };
  const IconComponent = icons[iconName as keyof typeof icons];
  return IconComponent ? <IconComponent className="w-8 h-8" /> : <Bot className="w-8 h-8" />;
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered automations to custom web applications, we deliver solutions that transform how you do business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 w-fit mb-6">
                {getIcon(service.icon)}
                <span className="text-white">{/* Icon is rendered above */}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;