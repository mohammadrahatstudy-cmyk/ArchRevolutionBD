import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser'; 

// We define this here to avoid the "module not found" error
const COMPANY_INFO = {
  address: "Level 4, Road 2, Block G, Dhaka 1212",
  phone: "+880 1795-978207",
  email: "arch.revolution2021@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/ArchRevolutionBD/",
    instagram: "https://www.instagram.com/arch_revolutionbd/"
  }
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // ==========================================
    // 1. PASTE YOUR EMAILJS KEYS HERE
    // ==========================================
    const serviceID = 'service_xu4ki83';       // e.g. service_xu4ki83
    const publicKey = 'ZPuE1kVTEYikcONKF';       // e.g. ZPuE1kVTEYikcONKF
    const templateAdmin = 'template_51ev6qp';   // Template that comes to YOU
    const templateClient = 'template_wkcnxpg'; // Template that goes to THEM
    // ==========================================

    // 2. Prepare the email to YOU
    const sendToAdmin = emailjs.send(serviceID, templateAdmin, formData, publicKey);

    // 3. Prepare the email to CLIENT
    const sendToClient = emailjs.send(serviceID, templateClient, formData, publicKey);

    // 4. Send both at the same time
    Promise.all([sendToAdmin, sendToClient])
      .then(() => {
        console.log('BOTH EMAILS SENT!');
        setIsSubmitted(true);
        setIsSending(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setIsSending(false);
        alert("Failed to send message. Please check your internet or Keys.");
      });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary text-white py-20 text-center bg-blue-900">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-slate-300">Let's discuss your next project. We are here to help.</p>
      </div>

      <div className="container mx-auto px-6 py-16 -mt-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Sidebar */}
          <div className="bg-slate-900 text-white p-10 md:w-1/3 flex flex-col justify-between bg-gray-900">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded text-blue-400"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded text-blue-400"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-400 text-sm hover:text-blue-400 transition">{COMPANY_INFO.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded text-blue-400"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-400 text-sm break-all hover:text-blue-400 transition">{COMPANY_INFO.email}</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <p className="text-slate-500 text-xs mb-4">Follow our social media</p>
               <div className="flex gap-4">
                 <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition">Facebook</a>
                 <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition">Instagram</a>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 md:w-2/3">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
                <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-6 text-green-700 font-semibold underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="John Doe"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="+880..."/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="john@example.com"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Interested Service</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
                      <option value="">Select a service...</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Civil Construction">Civil Construction</option>
                      <option value="Outdoor Branding">Outdoor Branding</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" disabled={isSending} className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg transition flex items-center justify-center gap-2 ${isSending ? 'opacity-75 cursor-not-allowed' : ''}`}>
                  {isSending ? 'SENDING...' : 'SEND MESSAGE'} {!isSending && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-96 bg-slate-200 relative">
          <iframe src="https://maps.google.com/maps?q=Arch%20Revolution%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Arch Revolution Office Location"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
