import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import poshakLogo from '../Image/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { cart, toggleCartDrawer } = useCartStore();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Fabrics', path: '/fabrics' },
    { name: 'Contact', path: '/contact' },
  ];

  const collectionDropdown = [
    { name: 'All Products', path: '/products' },
    { name: 'Suit', path: '/products?category=suit' },
    { name: 'Sherwani', path: '/products?category=sherwani' },
    { name: 'Pathani', path: '/products?category=pathani' },
    { name: 'Kurta', path: '/products?category=kurta' },
    { name: 'Blazer', path: '/products?category=blazer' },
    { name: 'Indo-Western', path: '/products?category=indo-western' },
    { name: 'Jodhpuri', path: '/products?category=jodhpuri' },
    { name: 'Carnival Outfit', path: '/products?category=carnival-outfit' },
    { name: 'Modi Jacket', path: '/products?category=modi-jacket' },
    { name: 'Shirt', path: '/products?category=shirt' },
    { name: 'Vestcoat', path: '/products?category=jacket' },
    { name: 'Payjama', path: '/products?category=payjama' },
    { name: 'Formal Paint', path: '/products?category=formal-paint' },
    { name: 'Safari', path: '/products?category=safari' },
    { name: 'Uniform', path: '/products?category=uniform' },
    { name: 'Accessories', path: '/products?category=accessories' },
    { name: 'Women Blazer', path: '/products?category=women-blazer' },
    { name: 'Women Suit', path: '/products?category=women-suit' },
    { name: 'Women Vestcoat', path: '/products?category=women-vestcoat' },
    { name: 'Fabric Collections', path: '/products?category=fabric-collections' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-md py-2 sm:py-3' : 'bg-white text-black py-2 sm:py-4'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <NavLink to="/" className="block" aria-label="Poshak Tailors - Home">
                <img 
                  src={poshakLogo} 
                  alt="Poshak Tailors And Ethnic Wear" 
                  className="h-9 sm:h-12 w-auto rounded-full" 
                  width="48"
                  height="48"
                  loading="eager"
                />
              </NavLink>
              <div className="hidden sm:block">
                <p className="text-xs font-bold uppercase tracking-wider leading-tight">Poshak Tailors</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">& Ethnic Wear</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `text-[11px] xl:text-sm font-semibold tracking-wide uppercase transition-colors hover:opacity-70 ${isActive ? 'border-b-2 border-black' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Collections Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center gap-1 text-[11px] xl:text-sm font-semibold tracking-wide uppercase transition-colors hover:opacity-70 ${location.pathname === '/products' || location.search.includes('category') ? 'border-b-2 border-black' : ''}`}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Collections
                  <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white shadow-2xl rounded-lg border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-2 gap-1 p-3">
                      {collectionDropdown.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className="block px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors rounded whitespace-nowrap"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                className="relative hover:bg-gray-100 transition-colors p-2 rounded" 
                onClick={toggleCartDrawer}
                aria-label={`Shopping cart, ${cartItemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center" aria-hidden="true">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </button>
              <button 
                className="lg:hidden hover:bg-gray-100 transition-colors p-2 rounded z-50" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[98] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div 
            className="fixed top-0 right-0 h-full w-80 max-w-full bg-white text-black shadow-2xl z-[99] lg:hidden transform transition-transform duration-300 overflow-y-auto"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="p-5 flex justify-between items-center border-b border-gray-200">
              <span className="font-bold uppercase tracking-wider text-sm">Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 hover:bg-gray-100 rounded"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="p-2">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `block py-4 px-4 text-sm font-semibold uppercase tracking-wider border-b border-gray-100 hover:bg-gray-50 transition-colors ${isActive ? 'bg-gray-50 text-black' : 'text-gray-700'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div className="py-4 px-4 border-b border-gray-200">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Collections</p>
                <div className="space-y-1">
                  {collectionDropdown.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block py-2 px-3 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-black transition-colors rounded"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-5">
              <div className="flex justify-center gap-6 mb-4">
                <a 
                  href="https://instagram.com/poshak_tailor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-black text-xs font-medium uppercase tracking-wider"
                  aria-label="Follow us on Instagram"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/people/Poshak-tailor/100064060421507/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-black text-xs font-medium uppercase tracking-wider"
                  aria-label="Follow us on Facebook"
                >
                  Facebook
                </a>
              </div>
              <a 
                href="tel:+919827165995" 
                className="block text-center text-xs font-bold uppercase tracking-wider text-black bg-white py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}