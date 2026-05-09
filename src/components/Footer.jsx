import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Fabrics', path: '/fabrics' },
    { name: 'Collections', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const collections = [
    { name: 'Suit', path: '/products?category=suit' },
    { name: 'Sherwani', path: '/products?category=sherwani' },
    { name: 'Pathani', path: '/products?category=pathani' },
    { name: 'Kurta', path: '/products?category=kurta' },
    { name: 'Blazer', path: '/products?category=blazer' },
    { name: 'Indo-Western', path: '/products?category=indo-western' },
    { name: 'Jodhpuri', path: '/products?category=jodhpuri' },
    { name: 'Carnival Outfit', path: '/products?category=carnival-outfit' },
  ];

  return (
    <footer className="bg-black text-white pt-12 md:pt-16 pb-6" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-xl md:text-2xl font-black uppercase mb-3 md:mb-4 tracking-tighter">Poshak Tailors <br/> & Ethnic Wear</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Crafting bespoke menswear and ethnic collections with over three decades of legacy. 
              "God Makes Man, We Make Gentleman."
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-gray-500" aria-hidden="true" />
              <span className="text-gray-400 text-xs">Mon-Sat: 10:00 AM - 8:00 PM</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/poshak_tailor" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://www.facebook.com/people/Poshak-tailor/100064060421507/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://wa.me/919827165995" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-white transition-colors inline-block"
                    aria-label={`Go to ${link.name}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Collections</h3>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              {collections.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="hover:text-white transition-colors inline-block"
                    aria-label={`Browse ${item.name} collection`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800 pt-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gray-500" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Address</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Poshak+Tailor+Raipur" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-gray-300 hover:text-white transition-colors leading-relaxed"
                  aria-label="View location on Google Maps"
                >
                  Shop No.9, Surana Market,<br/>
                  Behind City Center Mall, Pandri,<br/>
                  Raipur, C.G. - 492001
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-gray-500" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Phone</p>
                <div className="space-y-1">
                  <a href="tel:+919827165995" className="block text-xs text-gray-300 hover:text-white transition-colors">+91 98271 65995</a>
                  <a href="tel:+919893000970" className="block text-xs text-gray-300 hover:text-white transition-colors">+91 98930 00970</a>
                  <a href="tel:+919589281400" className="block text-xs text-gray-300 hover:text-white transition-colors">+91 95892 81400</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-gray-500" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Email</p>
                <a 
                  href="mailto:gyaneshwarudasi@gmail.com" 
                  className="text-xs text-gray-300 hover:text-white transition-colors break-all"
                  aria-label="Send us an email"
                >
                  gyaneshwarudasi@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>&copy; {currentYear} Poshak Tailors And Ethnic Wear. All rights reserved.</p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4">
              <li><Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}