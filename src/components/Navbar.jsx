import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import poshakLogo from '../Image/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart, toggleCartDrawer } = useCartStore();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Fabrics', path: '/fabrics' },
    { name: 'Collections', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-md py-2 sm:py-3' : 'bg-white text-black py-2 sm:py-4'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <NavLink to="/" className="block">
              <img src={poshakLogo} alt="Poshak" className="h-9 sm:h-12 w-auto" />
            </NavLink>
            <div className="hidden sm:block">
              <p className="text-xs font-bold uppercase tracking-wider leading-tight">Poshak Tailors</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">And Ethnic Wear</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-[10px] lg:text-xs xl:text-sm font-semibold tracking-wide uppercase transition-colors hover:opacity-70 ${isActive ? 'line-through decoration-2' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-1 sm:space-x-4 md:space-x-6">
            <button className="hover:bg-gray-100 transition-colors p-2 rounded hidden xs:block sm:block" onClick={() => navigate('/products')}>
              <Search className="w-5 h-5" />
            </button>
            <button className="relative hover:bg-gray-100 transition-colors p-2 rounded" onClick={toggleCartDrawer}>
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button className="md:hidden hover:bg-gray-100 transition-colors p-2 rounded" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white text-black shadow-xl z-[999] border-t-4 border-black">
          <div className="px-6 py-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-4 text-sm font-bold uppercase tracking-wider border-b border-gray-200 hover:bg-gray-50 transition-colors ${isActive ? 'text-black bg-gray-50' : 'text-gray-700'}`
                }
              >
                <span className="flex items-center justify-between">
                  {link.name}
                  <span className="text-xs text-gray-400">→</span>
                </span>
              </NavLink>
            ))}
          </div>
          <div className="bg-gray-100 px-6 py-4">
            <p className="text-xs text-gray-500 font-medium text-center uppercase tracking-wider">Follow Us</p>
            <div className="flex justify-center gap-4 mt-3">
              <a href="https://instagram.com/poshak_tailor" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">Instagram</a>
              <a href="https://www.facebook.com/people/Poshak-tailor/100064060421507/?locale=az_AZ" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">Facebook</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
