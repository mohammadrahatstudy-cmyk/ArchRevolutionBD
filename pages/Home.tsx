import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';
import { SERVICES, PROJECTS, WHY_US, TESTIMONIALS, CLIENTS } from '../constants';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pb-20 md:pb-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Interior Design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl pt-10 md:pt-0"
          >
            <h2 className="text-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Welcome to Arch Revolution</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              We Design. We Build.<br />
              <span className="text-accent">We Deliver Excellence.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              Comprehensive interior design, execution, and construction solutions for residential, commercial, and retail projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/projects" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded font-bold text-center transition shadow-lg shadow-accent/40 flex items-center justify-center gap-2 group whitespace-nowrap">
                VIEW OUR WORK <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded font-bold text-center transition whitespace-nowrap">
                GET A FREE QUOTE
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-20 bg-white -mt-20 relative z-20 container mx-auto px-6 rounded-t-3xl md:rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition border-t-4 border-accent group">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Comprehensive Design Solutions</h3>
            <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group relative overflow-hidden rounded-xl shadow-lg h-80 cursor-pointer">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/70 group-hover:bg-slate-900/60 transition-colors flex flex-col justify-end p-8">
                  <service.icon className="text-accent mb-4" size={32} />
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-white font-bold text-sm uppercase flex items-center gap-2 hover:text-accent transition">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border border-slate-300 px-8 py-3 rounded-full font-semibold hover:border-accent hover:text-accent transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-accent font-bold tracking-widest uppercase mb-2">Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary">Recent Masterpieces</h3>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent transition mt-4 md:mt-0">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 4).map((project) => (
              <div key={project.id} className="group relative rounded-lg overflow-hidden shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-64 md:h-80 object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-white p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-bold text-accent uppercase mb-1">{project.category}</div>
                  <h4 className="text-xl font-bold text-primary mb-1">{project.title}</h4>
                  <p className="text-slate-500 text-sm flex items-center gap-1"><Star size={12} fill="currentColor" /> {project.location}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-8 md:hidden">
            <Link to="/projects" className="inline-block border border-slate-300 px-8 py-3 rounded-full font-semibold hover:border-accent hover:text-accent transition">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Valued Clients Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-accent font-bold tracking-widest uppercase mb-2">Our Network</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary">Trusted by Industry Leaders</h3>
              <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {CLIENTS.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-32 group border border-slate-100"
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-w-full max-h-16 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Dream?</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
            Whether it's a cozy home, a modern office, or a retail outlet, we have the expertise to bring your vision to life.
          </p>
          <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded font-bold hover:bg-slate-100 transition shadow-lg inline-flex items-center gap-3">
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;