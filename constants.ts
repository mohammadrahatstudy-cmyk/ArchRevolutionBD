import { 
  Home, 
  Building2, 
  Hammer, 
  Megaphone, 
  Palette, 
  Printer,
  Compass,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import { ProjectCategory, Service, Project, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "ARCH Revolution",
  tagline: "We Design. We Build. We Deliver Excellence.",
  phone: "+880 1795-978207",
  email: "arch.revolution2021@gmail.com",
  address: "House: 56, Road 2, Block-G, Aftabnagar, Dhaka-1212, Bangladesh",
  socials: {
    facebook: "https://www.facebook.com/ArchRevolutionBD",
    instagram: "https://www.instagram.com/arch_revolutionbd/",
    youtube: "https://www.youtube.com/@ArchRevolutionBD/",
    whatsapp: "https://wa.me/8801795978207"
  }
};

export const SERVICES: Service[] = [
  {
    id: 'interior',
    title: 'Interior Design & Execution',
    description: 'Comprehensive interior solutions for residential and commercial spaces. We blend aesthetics with functionality to create spaces that inspire.',
    icon: Home,
    // Modern luxury living room
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
    features: ['Space Planning', 'Furniture Design', 'Lighting Solutions', 'Turnkey Execution']
  },
  {
    id: 'exterior',
    title: 'Exterior & Facade Design',
    description: 'Modern elevation design and structural glazing that gives your building a unique identity and superior weather protection.',
    icon: Building2,
    // Glass facade building
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80',
    features: ['Elevation Design', 'Structural Glazing', 'Landscape Planning', 'ACP Cladding']
  },
  {
    id: 'construction',
    title: 'Civil Construction',
    description: 'End-to-end civil construction services ensuring structural integrity, timely delivery, and adherence to international safety standards.',
    icon: Hammer,
    // Construction site structure
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80',
    features: ['Foundation Work', 'Structural Renovation', 'Project Management', 'Material Sourcing']
  },
  {
    id: 'branding',
    title: 'Outdoor Branding',
    description: 'High-visibility signage and billboard solutions to maximize your brand presence in the urban landscape.',
    icon: Megaphone,
    // Urban Billboard / Signage
    image: 'https://images.unsplash.com/photo-1585314062604-1a357de8b000?auto=format&fit=crop&w=1920&q=80',
    features: ['Billboards', 'LED Signage', 'Shop Fascia', 'Wayfinding Systems']
  },
  {
    id: 'activation',
    title: 'Brand Activation',
    description: 'Experiential marketing setups for events, trade shows, and corporate launches that engage audiences and drive conversion.',
    icon: Palette,
    // Event/Expo setup
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80',
    features: ['Event Stalls', 'Product Displays', 'Kiosk Design', 'Corporate Events']
  },
  {
    id: 'printing',
    title: 'Printing Solutions',
    description: 'State-of-the-art digital, offset, and screen printing services for all your corporate stationery and marketing collateral needs.',
    icon: Printer,
    // Professional printing environment
    image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=1920&q=80',
    features: ['Large Format', 'Brochures & Flyers', 'Vinyl Stickers', 'Offset Printing']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Skyline Residences',
    category: ProjectCategory.RESIDENTIAL,
    location: 'Gulshan, Dhaka',
    // Luxury apartment interior
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'A luxury apartment interior project focusing on minimalism and natural light.'
  },
  {
    id: 'p2',
    title: 'TechNexus HQ',
    category: ProjectCategory.CORPORATE,
    location: 'Banani, Dhaka',
    // Modern Office
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Modern open-plan office space designed for collaboration and productivity.'
  },
  {
    id: 'p3',
    title: 'Café Aura',
    category: ProjectCategory.COMMERCIAL,
    location: 'Dhanmondi, Dhaka',
    // Cafe Interior
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    description: 'Rustic industrial themed interior for a popular coffee chain.'
  },
  {
    id: 'p4',
    title: 'City Bank Facade',
    category: ProjectCategory.BRANDING,
    location: 'Motijheel',
    // Modern building facade/branding
    image: 'https://images.unsplash.com/photo-1565514020125-99d63c52a537?auto=format&fit=crop&w=800&q=80',
    description: 'Complete ACP cladding and 3D LED signage for bank headquarters.'
  },
  {
    id: 'p5',
    title: 'Apex Footwear Outlet',
    category: ProjectCategory.RETAIL,
    location: 'Uttara',
    // Retail Store
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    description: 'Retail interior optimization for better customer flow and product display.'
  },
  {
    id: 'p6',
    title: 'Green Valley Villa',
    category: ProjectCategory.RESIDENTIAL,
    location: 'Purbachal',
    // Modern House Exterior
    image: 'https://images.unsplash.com/photo-1600596542815-2a429b0091c4?auto=format&fit=crop&w=800&q=80',
    description: 'Architectural landscaping and exterior finishes for a duplex villa.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahim Ahmed',
    role: 'Managing Director',
    company: 'Alpha Group',
    text: 'ARCH Revolution transformed our office into a modern masterpiece. Their attention to detail is unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 't2',
    name: 'Sarah Khan',
    role: 'Homeowner',
    company: 'Private Residence',
    text: 'They delivered my dream kitchen exactly as I imagined. Professional, timely, and budget-friendly.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
  }
];

export const WHY_US = [
  {
    title: 'Assured Best Value',
    description: 'We optimize costs without compromising quality, ensuring you get the most out of your investment.',
    icon: Award
  },
  {
    title: 'On-Schedule Delivery',
    description: 'We respect deadlines. Our project management ensures timely handover, every time.',
    icon: Clock
  },
  {
    title: 'Quality-Checked Materials',
    description: 'We use only premium materials from trusted suppliers to ensure longevity and durability.',
    icon: CheckCircle
  },
  {
    title: 'End-to-End Solutions',
    description: 'From concept to completion, we handle everything so you can have peace of mind.',
    icon: Compass
  }
];

export const CLIENTS = [
  { 
    name: "Honda", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/320px-Honda_Logo.svg.png" 
  },
  { 
    name: "Apex", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4vHB25G3Zjm8sGooMBGOG6ktubHTiBtREA&s" 
  },
  { 
    name: "Umidigi", 
    logo: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/3981a5f5-6dad-47c0-bc13-50575e09123f.png" 
  },
  { 
    name: "Pioneer Insurance", 
    logo: "https://www.pioneerinsurance.com.bd/assets/front/images/logo.png?1763720210" 
  },
  { 
    name: "Electromart", 
    logo: "https://electromart.com.bd/media/2025/07/EML-MAIN-LOGO.png" 
  },
  { 
    name: "Oppo", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/OPPO_Logo.svg/320px-OPPO_Logo.svg.png" 
  },
  { 
    name: "Realme", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.png" 
  },
  { 
    name: "IDP", 
    logo: "https://www.nafsa.org/sites/default/files/styles/partner_logo/public/media/image/IDP_Logo_POS_RGB%20%281%29.png?itok=XId8P1KT" 
  },
  { 
    name: "AFBL", 
    logo: "https://www.akijfood.com/_next/image?url=https%3A%2F%2Fneoscms.blob.core.windows.net%2Fmedia%2F1724905661557_afbllogo.png&w=1920&q=75" 
  },
  { 
    name: "Beximco", 
    logo: "https://www.beximco.com/themes/beximco/assets/images/beximco-logo-small.png" 
  }
];