import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/useCartStore';
import kurtaHero from '../Image/Kurta_Hero.jpg';

import sherwani1 from '../Image/sherwani_hero.jpg';
import sherwani2 from '../Image/white_bandhgala.jpg';
import sherwani3 from '../Image/Indian Royal Jhodhpuri Wedding Outfit for Mens.jpg';
import sherwani4 from '../Image/Indian Royal Jhodhpuri Wedding Outfit for Mens (1).jpg';
import kurta1 from '../Image/kurta_wine.jpg';
import kurta2 from '../Image/kurta_white.jpg';
import kurta3 from '../Image/download (23).jpg';
import kurta4 from '../Image/download (22).jpg';
import suit1 from '../Image/Suit Inspiration for Styled Shoot.jpg';
import suit2 from '../Image/Lutwyche jacket.jpg';
import suit3 from '../Image/The anatomy of the suit jacket.jpg';
import suit4 from '../Image/Men\'s outfit videos 《Formal Suits 》.jpg';
import blazer1 from '../Image/download (20).jpg';
import blazer2 from '../Image/download (21).jpg';
import blazer3 from '../Image/download (16).jpg';
import blazer4 from '../Image/download (15).jpg';
import pathani1 from '../Image/download (17).jpg';
import pathani2 from '../Image/download (18).jpg';
import pathani3 from '../Image/download (19).jpg';
import pathani4 from '../Image/download (14).jpg';
import indowestern1 from '../Image/hand painted indowestan set.jpg';
import indowestern2 from '../Image/Udaipur Elegance.jpg';
import indowestern3 from '../Image/download (13).jpg';

const CATEGORIES = ['All', 'Suit', 'Sherwani', 'Pathani', 'Kurta', 'Blazer', 'Indo-Western'];

const IMAGES = {
  Sherwani: [sherwani1, sherwani2, sherwani3, sherwani4],
  Suit: [suit1, suit2, suit3, suit4],
  Kurta: [kurta1, kurta2, kurta3, kurta4],
  Blazer: [blazer1, blazer2, blazer3, blazer4],
  Pathani: [pathani1, pathani2, pathani3, pathani4],
  'Indo-Western': [indowestern1, indowestern2, indowestern3]
};

const getRandomImage = (category) => {
  const images = IMAGES[category];
  if (!images || images.length === 0) return sherwani1;
  return images[Math.floor(Math.random() * images.length)];
};

const MANDATORY_PRODUCTS = [
  { id: 1, name: 'Zardosi Embroidered Raw Silk Wedding Sherwani', category: 'Sherwani', price: 45000, image: getRandomImage('Sherwani') },
  { id: 2, name: 'Italian Viscose Velvet Zari Bandhgala Suit', category: 'Suit', price: 28500, image: getRandomImage('Suit') },
  { id: 3, name: 'Handwoven Benarasi Silk Kurta Pajama Set', category: 'Kurta', price: 18000, image: getRandomImage('Kurta') },
  { id: 4, name: 'Classic Black Tuxedo Suit with Satin Lapel', category: 'Suit', price: 22000, image: getRandomImage('Suit') },
  { id: 5, name: 'Midnight Blue Embroidered Indo-Western Sherwani', category: 'Sherwani', price: 32000, image: getRandomImage('Sherwani') },
  { id: 6, name: 'Lucknowi Chikankari Festive Kurta', category: 'Kurta', price: 12500, image: getRandomImage('Kurta') },
  { id: 7, name: 'Charcoal Grey Premium Linen Blazer', category: 'Blazer', price: 15000, image: getRandomImage('Blazer') },
  { id: 8, name: 'Emerald Green Silk Pathani Suit', category: 'Pathani', price: 14500, image: getRandomImage('Pathani') },
  { id: 9, name: 'Bespoke Three-Piece Jodhpuri Suit', category: 'Suit', price: 35000, image: getRandomImage('Suit') },
  { id: 10, name: 'Ivory Threadwork Georgette Groom Sherwani', category: 'Sherwani', price: 48000, image: getRandomImage('Sherwani') }
];

// Generate exactly 40 more products to reach 50
const ADJECTIVES = ['Royal', 'Classic', 'Premium', 'Bespoke', 'Tailored', 'Elegant', 'Regal', 'Signature', 'Vibrant', 'Majestic'];
const MATERIALS = ['Silk', 'Linen', 'Velvet', 'Cotton', 'Brocade', 'Georgette', 'Viscose', 'Jacquard', 'Wool', 'Cashmere'];

const GENERATED_PRODUCTS = Array.from({ length: 40 }).map((_, i) => {
  const categories = CATEGORIES.slice(1);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const material = MATERIALS[Math.floor(Math.random() * MATERIALS.length)];
  const name = `${adjective} ${material} ${category}`;
  const price = Math.floor(Math.random() * 40000) + 10000;
  
  return {
    id: i + 11,
    name,
    category,
    price,
    image: getRandomImage(category)
  };
});

export const ALL_PRODUCTS = [...MANDATORY_PRODUCTS, ...GENERATED_PRODUCTS];

export default function Products() {
  const [filter, setFilter] = useState('All');
  const addToCart = useCartStore((state) => state.addToCart);

  const filteredProducts = filter === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] w-full pt-24 bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${kurtaHero})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4">Our Collection</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Explore Now</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-gray-200 pb-4">
        {CATEGORIES.map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-sm font-bold uppercase tracking-widest px-2 py-2 transition-colors ${filter === cat ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-black'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={product.id} 
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 cursor-pointer">
                <Link to={`/product/${product.id}`} className="block w-full h-full">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </Link>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <button 
                  onClick={(e) => { e.preventDefault(); addToCart(product); }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-8 py-4 w-5/6 uppercase text-xs font-black tracking-widest hover:bg-black hover:text-white shadow-xl z-10"
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-bold text-sm uppercase tracking-wide mb-2 leading-snug h-10 flex items-center justify-center hover:text-gray-500 transition-colors">{product.name}</h3>
                </Link>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">{product.category}</p>
                <span className="font-black text-lg">₹{product.price.toLocaleString('en-IN')}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      </div>
    </div>
  );
}
