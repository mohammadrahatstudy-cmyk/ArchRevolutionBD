import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-slate-300">Let's discuss your next project. We are here to help.</p>
      </div>

      <div className="container mx-auto px-6 py-16 -mt-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="bg-slate-900 text-white p-10 md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-400 text-sm hover:text-accent transition">{COMPANY_INFO.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-400 text-sm break-all hover:text-accent transition">{COMPANY_INFO.email}</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <p className="text-slate-500 text-xs mb-4">Follow our social media for updates</p>
               <div className="flex gap-4">
                 <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noreferrer" className="text-white hover:text-accent transition">Facebook</a>
                 <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noreferrer" className="text-white hover:text-accent transition">Instagram</a>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 md:w-2/3">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
                <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-green-700 font-semibold hover:text-green-900 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                      placeholder="+880..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Interested Service</label>
                    <select 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                    >
                      <option value="">Select a service...</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Construction">Civil Construction</option>
                      <option value="Branding">Outdoor Branding</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-lg shadow-lg shadow-accent/30 transition flex items-center justify-center gap-2"
                >
                  SEND MESSAGE <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-96 bg-slate-200 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.127863116568!2d90.42337731543183!3d23.77846198457551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79038202117%3A0x63390234f9273646!2sAftabnagar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1634567890123!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;