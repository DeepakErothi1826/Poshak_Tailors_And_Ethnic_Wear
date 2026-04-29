import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/useCartStore';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
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
import suit2 from '../Image/Grey Slim-Fit Suit 3-Piece - VIOSSI.jpg';
import suit3 from '../Image/Black Slim-Fit Suit 3-Piece - VIOSSI.jpg';
import suit4 from '../Image/Grey Slim-Fit Suit 3-Piece - VIOSSI (1).jpg';

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

import shirt1 from '../Image/100% Cotton Slim Fit Shirt.jpg';
import shirt2 from '../Image/Double Cuff Light Green Plain Shirt.jpg';
import shirt3 from "../Image/Autumn New Italian Collar Young Men's Shirt - Dark Blue _ XXXL.jpg";
import shirt4 from '../Image/download (82).jpg';

import jacket1 from '../Image/Casual Denim Hunting Style Shacket for Men.jpg';
import jacket2 from '../Image/Casual White Hunting Shacket for Men.jpg';
import jacket3 from '../Image/Estilo elegante y sport.jpg';
import jacket4 from '../Image/download (84).jpg';

import payjama1 from '../Image/download (51).jpg';
import payjama2 from '../Image/download (50).jpg';
import payjama3 from '../Image/download (49).jpg';
import payjama4 from '../Image/Buy Black Georgette Short Kurta for Men And Wide Pants at Aza Fashions.jpg';

import safari1 from '../Image/Find statement summer suiting in our tailoring collection__.jpg';
import safari2 from '../Image/download (86).jpg';
import safari3 from '../Image/download (87).jpg';
import safari4 from '../Image/download (88).jpg';

import uniform1 from '../Image/American school uniform.jpg';
import uniform2 from '../Image/British college style Spring autumn children clothes school uniform suit,kids school clothing.jpg';
import uniform3 from '../Image/download (71).jpg';
import uniform4 from '../Image/download (72).jpg';

import jeans1 from '../Image/download (74).jpg';
import jeans2 from '../Image/download (75).jpg';
import jeans3 from '../Image/download (76).jpg';
import jeans4 from "../Image/4 Colors Autumn Vintage Distressed Men's Baggy Straight Jeans Fashion Korean High Street Denim Pants Streetwear Male Trousers - Vintage Blue _ M.jpg";

import accessories1 from '../Image/Adam_Boyfriend - Vest.jpg';
import accessories2 from '../Image/fancy waistcoats_ definitely!.jpg';
import accessories3 from '../Image/COOFANDY Mens Plaid Slim Fit Double Breasted Dress Suit Button Down Vest.jpg';
import accessories4 from '../Image/download (85).jpg';

const CATEGORIES = ['All', 'Suit', 'Sherwani', 'Pathani', 'Kurta', 'Blazer', 'Indo-Western', 'Shirt', 'Jacket', 'Payjama', 'Safari', 'Uniform', 'Jeans', 'Accessories'];

const IMAGES = {
  Sherwani: [sherwani1, sherwani2, sherwani3, sherwani4],
  Suit: [suit1, suit2, suit3, suit4],
  Kurta: [kurta1, kurta2, kurta3, kurta4],
  Blazer: [blazer1, blazer2, blazer3, blazer4],
  Pathani: [pathani1, pathani2, pathani3, pathani4],
  'Indo-Western': [indowestern1, indowestern2, indowestern3],
  Shirt: [shirt1, shirt2, shirt3, shirt4],
  Jacket: [jacket1, jacket2, jacket3, jacket4],
  Payjama: [payjama1, payjama2, payjama3, payjama4],
  Safari: [safari1, safari2, safari3, safari4],
  Uniform: [uniform1, uniform2, uniform3, uniform4],
  Jeans: [jeans1, jeans2, jeans3, jeans4],
  Accessories: [accessories1, accessories2, accessories3, accessories4]
};

const getRandomImage = (category) => {
  const images = IMAGES[category];
  if (!images || images.length === 0) return sherwani1;
  return images[Math.floor(Math.random() * images.length)];
};

const MANDATORY_PRODUCTS = [
  { id: 1, name: 'Zardosi Embroidered Raw Silk Wedding Sherwani', category: 'Sherwani', price: 45000, image: sherwani1 },
  { id: 2, name: 'Italian Viscose Velvet Zari Bandhgala Suit', category: 'Suit', price: 28500, image: suit1 },
  { id: 3, name: 'Handwoven Benarasi Silk Kurta Pajama Set', category: 'Kurta', price: 18000, image: kurta1 },
  { id: 4, name: 'Classic Black Tuxedo Suit with Satin Lapel', category: 'Suit', price: 22000, image: suit3 },
  { id: 5, name: 'Midnight Blue Embroidered Indo-Western Sherwani', category: 'Sherwani', price: 32000, image: sherwani3 },
  { id: 6, name: 'Lucknowi Chikankari Festive Kurta', category: 'Kurta', price: 12500, image: kurta3 },
  { id: 7, name: 'Charcoal Grey Premium Linen Blazer', category: 'Blazer', price: 15000, image: blazer1 },
  { id: 8, name: 'Emerald Green Silk Pathani Suit', category: 'Pathani', price: 14500, image: pathani1 },
  { id: 9, name: 'Bespoke Three-Piece Jodhpuri Suit', category: 'Suit', price: 35000, image: suit2 },
  { id: 10, name: 'Ivory Threadwork Georgette Groom Sherwani', category: 'Sherwani', price: 48000, image: sherwani4 },
  { id: 11, name: 'Classic Navy Blue Indo-Western Set', category: 'Indo-Western', price: 28000, image: indowestern1 },
  { id: 12, name: 'Premium Cotton Formal Shirt', category: 'Shirt', price: 4500, image: shirt1 },
  { id: 13, name: 'Leather Biker Jacket', category: 'Jacket', price: 18000, image: jacket1 },
  { id: 14, name: 'Silk Blend Payjama Set', category: 'Payjama', price: 8500, image: payjama1 },
  { id: 15, name: 'Safari Summer Suit', category: 'Safari', price: 15000, image: safari1 },
  { id: 16, name: 'School Uniform Blazer', category: 'Uniform', price: 6500, image: uniform1 },
  { id: 17, name: 'Slim Fit Designer Jeans', category: 'Jeans', price: 5500, image: jeans1 },
  { id: 18, name: 'Designer Waistcoat', category: 'Accessories', price: 3500, image: accessories1 }
];

const ADJECTIVES = ['Royal', 'Classic', 'Premium', 'Bespoke', 'Tailored', 'Elegant', 'Regal', 'Signature', 'Vibrant', 'Majestic'];
const MATERIALS = ['Silk', 'Linen', 'Velvet', 'Cotton', 'Brocade', 'Georgette', 'Viscose', 'Jacquard', 'Wool', 'Cashmere'];

const GENERATED_PRODUCTS = Array.from({ length: 32 }).map((_, i) => {
  const categories = CATEGORIES.slice(1);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const material = MATERIALS[Math.floor(Math.random() * MATERIALS.length)];
  const name = `${adjective} ${material} ${category}`;
  const price = Math.floor(Math.random() * 40000) + 10000;
  
  return {
    id: i + 19,
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
    <>
    <SEO 
      title="Premium Groom & Menswear Collection | Bespoke Suits, Sherwani, Kurta"
      description="Explore our premium collection of bespoke suits, sherwanis, kurtas, blazers, pathani suits, and Indo-Western wear. Handcrafted wedding groom wear in Raipur, Chhattisgarh."
      keywords="groom wear, menswear collection, bespoke suits, sherwani, kurta, blazer, pathani suit, Indo-Western, wedding collection, groom outfit, Raipur"
    />
    <div className="w-full bg-white">
      <section className="relative h-[50vh] sm:h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${kurtaHero})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-3 sm:px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-3 sm:mb-4 text-white">Our Collection</h1>
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white mb-4 sm:mb-6">Explore Now</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 uppercase text-xs font-bold tracking-widest hover:bg-gray-200 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 mb-8 sm:mb-12 border-b border-gray-200 pb-4 overflow-x-auto">
        {CATEGORIES.map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs sm:text-sm font-bold uppercase tracking-widest px-2 py-2 transition-colors whitespace-nowrap ${filter === cat ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-black'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 gap-y-10 sm:gap-y-16">
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
                <span className="font-black text-lg">Contact to Owner</span>
              </div>
              </motion.div>
          ))}
        </AnimatePresence>
</motion.div>
      </div>
    </div>
    </>
  );
}