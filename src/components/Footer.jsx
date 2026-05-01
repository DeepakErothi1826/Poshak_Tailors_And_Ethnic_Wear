import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-xl md:text-2xl font-black uppercase mb-3 md:mb-4 tracking-tighter">Poshak Tailors <br/> & Ethnic Wear</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting bespoke menswear and ethnic collections with over three decades of legacy.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/poshak_tailor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/people/Poshak-tailor/100064060421507/?locale=az_AZ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FacebookIcon />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/fabrics" className="hover:text-white transition-colors">Fabrics</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Collections</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://maps.google.com/?q=Shop+No.9,+Surana+Market,+Pandri,+Raipur,+Chhattisgarh+492001" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm hover:text-white underline">Shop No.9, Surana Market, Pandri, Raipur, C.G. - 492001</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col text-xs md:text-sm">
                  <span>+91 98271 65995</span>
                  <span>+91 98930 00970</span>
                  <span>+91 95892 81400</span>
                  <span>+91 70006 59096</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm break-all">poshaktailor1995@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Poshak Tailors And Ethnic Wear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}