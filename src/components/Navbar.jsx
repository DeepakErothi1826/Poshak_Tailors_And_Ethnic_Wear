import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import poshakLogo from '../Image/Poshak logo.png';

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
    { name: 'Product', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-md py-2 sm:py-4' : 'bg-white text-black py-3 sm:py-4'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
            <NavLink to="/" className="block">
              <img src={poshakLogo} alt="Poshak" className="h-8 sm:h-10 w-auto" />
            </NavLink>
            <div className="hidden sm:block">
              <p className="text-xs font-bold uppercase tracking-wider leading-tight">Poshak Tailors</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">And Ethnic Wear</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-xs xl:text-sm font-semibold tracking-wide uppercase transition-colors hover:opacity-70 ${isActive ? 'line-through decoration-2' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <button className="hover:opacity-70 transition-opacity hidden sm:block" onClick={() => navigate('/products')}>
              <Search className="w-5 h-5" />
            </button>
            <button className="relative hover:opacity-70 transition-opacity" onClick={toggleCartDrawer}>
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button className="lg:hidden hover:opacity-70 transition-opacity p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-black absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-3 text-sm font-bold tracking-widest uppercase ${isActive ? 'bg-gray-100' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button className="block w-full text-left px-3 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gray-50" onClick={() => { navigate('/products'); setMobileMenuOpen(false); }}>
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
