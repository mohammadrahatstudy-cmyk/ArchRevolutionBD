import React, { useState } from 'react';
import { PROJECTS, COMPANY_INFO } from '../constants';
import { ProjectCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = activeCategory === ProjectCategory.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Projects Header" />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg">Explore our diverse range of successful projects across residential, commercial, and corporate sectors.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.values(ProjectCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                    <button className="bg-white text-primary p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-accent uppercase mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center text-slate-400 text-xs font-medium">
                    <MapPin size={14} className="mr-1" /> {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">No projects found in this category.</p>
          </div>
        )}
        
        {/* Contact CTA */}
        <div className="mt-24 bg-white rounded-2xl p-10 shadow-xl border border-slate-100 text-center">
             <h3 className="text-2xl font-bold text-primary mb-4">Want to see your project here?</h3>
             <p className="text-slate-600 mb-8 max-w-xl mx-auto">Contact us today to discuss your vision. We bring excellence to every square foot.</p>
             <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded hover:bg-slate-800 transition font-bold">Start Your Journey</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;