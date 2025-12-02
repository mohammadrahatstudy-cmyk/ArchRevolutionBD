import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Services Background" 
        />
        <div className="container mx-auto px-6 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-slate-200 max-w-2xl text-lg">We offer end-to-end solutions for all your architectural and design needs, tailored to your budget and timeline.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-accent/10 rounded-xl transform rotate-3"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded shadow-xl hidden md:block">
                    <service.icon size={40} className="text-accent" />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <h3 className="text-accent font-bold uppercase tracking-wider text-sm mb-2">What We Do</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full"><Check size={14} /></span>
                      <span className="font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;