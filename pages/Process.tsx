import React from 'react';
import { ClipboardList, PenTool, Hammer, Key } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Consultation & Concept',
      description: 'We meet to understand your requirements, budget, and vision. Our team creates initial mood boards and concept layouts.',
      icon: ClipboardList
    },
    {
      id: 2,
      title: 'Design & Approval',
      description: 'We develop detailed 2D/3D designs and gather your feedback. Material selection and cost estimation are finalized here.',
      icon: PenTool
    },
    {
      id: 3,
      title: 'Execution & Supervision',
      description: 'Our skilled workforce brings the design to life under strict supervision to ensure quality and timeline adherence.',
      icon: Hammer
    },
    {
      id: 4,
      title: 'Handover',
      description: 'We conduct a final quality check and hand over your dream space, ready for you to move in.',
      icon: Key
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">How We Work</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">A transparent, step-by-step process ensuring peace of mind from start to finish.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 z-0"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Text Side */}
                <div className={`w-full md:w-1/2 p-6 bg-white rounded-xl shadow-lg border-l-4 border-accent ${index % 2 === 0 ? 'text-right md:text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-bold text-primary mb-2">Step 0{step.id}</h3>
                  <h4 className="text-xl font-bold text-accent mb-3">{step.title}</h4>
                  <p className="text-slate-600">{step.description}</p>
                </div>

                {/* Icon Center */}
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white shrink-0">
                  <step.icon size={28} />
                </div>

                {/* Empty Side for Balance */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;