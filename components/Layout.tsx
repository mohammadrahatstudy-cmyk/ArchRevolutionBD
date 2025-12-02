import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import logo from '../assets/logo.png';
import footerLogo from '../assets/logoo.png';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - International Standard */}
      <div className="bg-primary text-slate-300 py-2.5 text-sm hidden md:block border-b border-slate-800">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Left: Email */}
          <div className="flex items-center">
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-white transition">
              <Mail size={15} className="text-accent" /> 
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          
          {/* Right: Phone & WhatsApp */}
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-white transition">
              <Phone size={15} className="text-accent" /> 
              <span className="font-medium tracking-wide">{COMPANY_INFO.phone}</span>
            </a>
            <span className="w-px h-4 bg-slate-700"></span>
            <a 
              href={COMPANY_INFO.socials.whatsapp} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-white hover:text-green-400 transition"
            >
              <MessageCircle size={15} className="text-green-500" />
              <span className="font-semibold">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
             {/* Simulating the logo from source/logo.png, fallback to text if broken */}
            {/* REPLACING CODE LOGO WITH IMAGE LOGO */}
            <img src={logo} alt="Arch Revolution" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full ${location.pathname === link.path ? 'text-accent after:w-full' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-3">
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded shadow-lg shadow-accent/30 text-sm font-bold transition-all transform hover:-translate-y-0.5"
              >
                GET QUOTE
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="px-6 py-3 border-b border-slate-100 text-slate-700 hover:bg-slate-50 hover:text-accent font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-3">
              <a 
                href={COMPANY_INFO.socials.whatsapp} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-green-600 font-bold mb-3"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              <Link 
                to="/contact" 
                className="block text-center bg-accent text-white py-2 rounded font-bold"
              >
                GET QUOTE
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* WhatsApp Float */}
      <a 
        href={COMPANY_INFO.socials.whatsapp} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Footer */}
      <footer className="bg-primary text-slate-400 pt-16 pb-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={footerLogo} alt="Arch Revolution" className="h-10 w-auto" />
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              From Commercial, Outlet, and Residential Interiors to Exterior development and Signage Branding, ARCH Revolution delivers complete turnkey solutions for your space and identity.
            </p>
            <div className="flex gap-4">
               <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded hover:bg-accent transition text-white"><Facebook size={18} /></a>
               <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded hover:bg-accent transition text-white"><Instagram size={18} /></a>
               <a href={COMPANY_INFO.socials.youtube} target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded hover:bg-accent transition text-white"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-accent">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-accent transition">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition">Our Projects</Link></li>
              <li><Link to="/services" className="hover:text-accent transition">Services</Link></li>
              <li><Link to="/process" className="hover:text-accent transition">How We Work</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-accent">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-accent transition">Interior Design</Link></li>
              <li><Link to="/services" className="hover:text-accent transition">Exterior Facade</Link></li>
              <li><Link to="/services" className="hover:text-accent transition">Civil Construction</Link></li>
              <li><Link to="/services" className="hover:text-accent transition">Brand Activation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition">Printing Solutions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-accent">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={16} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={16} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={16} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="container mx-auto px-6 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} ARCH Revolution. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;