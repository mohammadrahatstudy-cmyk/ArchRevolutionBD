import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
       <div className="bg-slate-100 py-24">
         <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">About ARCH Revolution</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate architects, designers, and engineers committed to revolutionizing spaces across Bangladesh through innovation and quality.
            </p>
         </div>
       </div>

       <div className="container mx-auto px-6 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
             <p className="text-slate-600 mb-6 leading-relaxed">
               Founded with a vision to bring world-class design aesthetics to the local market, {COMPANY_INFO.name} has grown from a small design studio to a full-fledged turnkey solution provider.
             </p>
             <p className="text-slate-600 mb-6 leading-relaxed">
               We believe that good design is not just about how it looks, but how it works. Our integrated approach combines creative design with technical expertise in civil construction and branding.
             </p>
             <div className="border-l-4 border-accent pl-6 py-2 bg-slate-50">
               <p className="italic text-slate-700 font-medium">"Design is not just what it looks like and feels like. Design is how it works."</p>
             </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" className="rounded-lg shadow-lg w-full h-full object-cover mt-8" alt="Office Collaboration" />
             <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" className="rounded-lg shadow-lg w-full h-full object-cover" alt="Construction Site" />
           </div>
         </div>
       </div>

       {/* Core Values */}
       <div className="bg-primary text-white py-20">
         <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold">Our Core Values</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div className="text-center p-6 border border-slate-700 rounded-xl hover:bg-slate-800 transition">
               <Target className="mx-auto text-accent mb-4" size={40} />
               <h3 className="font-bold text-xl mb-2">Precision</h3>
               <p className="text-slate-400 text-sm">Accuracy in every detail, from blueprint to brick.</p>
             </div>
             <div className="text-center p-6 border border-slate-700 rounded-xl hover:bg-slate-800 transition">
               <Users className="mx-auto text-accent mb-4" size={40} />
               <h3 className="font-bold text-xl mb-2">Client Focus</h3>
               <p className="text-slate-400 text-sm">We listen, understand, and deliver on your specific needs.</p>
             </div>
             <div className="text-center p-6 border border-slate-700 rounded-xl hover:bg-slate-800 transition">
               <Award className="mx-auto text-accent mb-4" size={40} />
               <h3 className="font-bold text-xl mb-2">Quality</h3>
               <p className="text-slate-400 text-sm">Zero compromise on materials and workmanship.</p>
             </div>
             <div className="text-center p-6 border border-slate-700 rounded-xl hover:bg-slate-800 transition">
               <Zap className="mx-auto text-accent mb-4" size={40} />
               <h3 className="font-bold text-xl mb-2">Innovation</h3>
               <p className="text-slate-400 text-sm">Adopting modern techniques for better efficiency.</p>
             </div>
           </div>
         </div>
       </div>
    </div>
  );
};

export default About;