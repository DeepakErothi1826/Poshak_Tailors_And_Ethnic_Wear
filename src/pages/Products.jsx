import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import kurtaHero from '../Image/hero_kurta.jpg';

const CATEGORIES = ['All', 'Suit', 'Sherwani', 'Pathani', 'Kurta', 'Blazer', 'Indo-Western', 'Shirt', 'Jacket', 'Payjama', 'Formal Paint', 'Safari', 'Uniform', 'Jeans', 'Accessories'];

const CATEGORY_MAP = {
  'suit': 'Suit',
  'sherwani': 'Sherwani',
  'pathani': 'Pathani',
  'kurta': 'Kurta',
  'blazer': 'Blazer',
  'indo-western': 'Indo-Western',
  'shirt': 'Shirt',
  'jacket': 'Jacket',
  'payjama': 'Payjama',
  'formal-paint': 'Formal Paint',
  'safari': 'Safari',
  'uniform': 'Uniform',
  'jeans': 'Jeans',
  'accessories': 'Accessories'
};

const REVERSE_CATEGORY_MAP = {
  'Suit': 'suit',
  'Sherwani': 'sherwani',
  'Pathani': 'pathani',
  'Kurta': 'kurta',
  'Blazer': 'blazer',
  'Indo-Western': 'indo-western',
  'Shirt': 'shirt',
  'Jacket': 'jacket',
  'Payjama': 'payjama',
  'Formal Paint': 'formal-paint',
  'Safari': 'safari',
  'Uniform': 'uniform',
  'Jeans': 'jeans',
  'Accessories': 'accessories'
};

const FOLDER_NAME_MAP = {
  'Sherwani': 'Sherwani',
  'Suit': 'Suit',
  'Kurta': 'kurta',
  'Blazer': 'Blazer',
  'Pathani': 'Pathani',
  'Indo-Western': 'indo-Western',
  'Shirt': 'Shirt',
  'Jacket': 'Jacket',
  'Payjama': 'Payjama',
  'Formal Paint': 'formal paint',
  'Safari': 'Safari suit',
  'Uniform': 'uniform',
  'Jeans': 'jeans',
  'Accessories': 'Accessories'
};

const allImagePaths = Object.keys(import.meta.glob('../Image/**/*.{jpg,jpeg,png,webp}', { eager: true }));

const isValidImageFile = (path) => {
  const fileName = path.split('/').pop();
  return !fileName.includes('#') && !fileName.includes('&') && !fileName.includes('%') && !fileName.includes('?');
};

const getImageUrl = (path) => {
  if (!isValidImageFile(path)) return null;
  const fileName = path.split('/').pop();
  return new URL(path, import.meta.url).href;
};

function getImagesForCategory(category) {
  const folderName = FOLDER_NAME_MAP[category];
  if (!folderName) return [];
  
  const folderPath = `../Image/${folderName}/`;
  
  return allImagePaths
    .filter(path => path.startsWith(folderPath) && isValidImageFile(path))
    .map(path => getImageUrl(path))
    .filter(Boolean);
}

function generateProductName(category, index, imagePath) {
  const fileName = imagePath.split('/').pop().split('.')[0].replace(/[-_]/g, ' ');
  const cleanName = fileName.replace(/\d+/g, '').replace(/\s+/g, ' ').trim();
  
  const prefixes = {
    'Sherwani': ['Zardosi Embroidered Raw Silk Wedding', 'Royal Silk', 'Premium Georgette', 'Ivory Threadwork Groom', 'Classic Silk', 'Designer Embroidered', 'Wedding Groom', 'Traditional', 'Premium Bandhgala', 'Royal Wedding', 'Elegant', 'Classic Embroidered', 'Regal', 'Silk Blend', 'Bespoke', 'Traditional Wear', 'Premium Groom', 'Wedding wear', 'Signature', 'Majestic', 'Vibrant'],
    'Suit': ['Navy Blue', 'Grey Designer', 'Black Formal', 'Wedding Groom', 'Premium Wool', 'Classic Bandhgala', 'Velvet', 'Silk Blend', 'Formal', 'Designer', 'Premium', 'Classic', 'Tailored', 'Bespoke', 'Royal', 'Elegant', 'Beige Slim Fit', 'Charcoal Wool', 'Navy Blue Formal', 'Black Tuxedo', 'Brown Wedding', 'Grey Checkered', 'Blue Double Breasted', 'Cream Linen', 'Plum Party', 'Olive Green', 'Burgundy Velvet', 'Tan Summer', 'Midnight Blue', 'Black Peak Lapel', 'Navy Pinstripe', 'Grey Textured', 'Classic Black', 'Blue Business'],
    'Kurta': ['Handwoven Benarasi Silk', 'Lucknowi Chikankari', 'Classic White', 'Wine Red Silk', 'Royal Silk', 'Cotton Summer', 'Embroidered Festival', 'Bespoke Wedding', 'Traditional', 'Modern Designer', 'Premium Wedding', 'Banarasi Silk', 'Premium'],
    'Blazer': ['Charcoal Grey Premium Linen', 'Classic Navy', 'Black Tuxedo', 'Grey Wool', 'Casual Blue', 'Tan Leather', 'Modern Fit', 'Slim Fit Formal', 'Wedding Guest', 'Bespoke Designer', 'Premium Italian', 'Velvet Evening', 'Linen Summer', 'Double Breasted', 'Tweed Classic', 'Modern Party'],
    'Pathani': ['Emerald Green Silk', 'Royal Blue', 'Maroon Silk', 'Black Designer', 'Golden Embroidered', 'Wedding', 'Black Viscose', 'Festive Wear', 'Teal Blue', 'DesiWhite', 'Modern Slate Grey', 'Black Embroidered', 'Brown Cotton', 'Olive Green', 'Sage Green', 'Taupe', 'White Cotton', 'Off White Chanderi', 'Olive Cotton', 'Mustard Cotton', 'Mehul Dori', 'Cotton Blend', 'Premium', 'Classic', 'Designer'],
    'Indo-Western': ['Classic Indo-Western', 'Designer Indo-Western', 'Premium Groom', 'Embroidered', 'Silk Blend', 'Royal', 'Elegant', 'Modern', 'Wedding', 'Festive'],
    'Shirt': ['Premium Cotton Formal', 'Classic Formal', 'Premium Linen', 'Designer Print', 'Casual Cotton', 'Party Wear', 'Slim Fit', 'Classic White', 'Classic Blue', 'Designer', 'Premium', 'Formal', 'Casual', 'Party', 'Classic'],
    'Jacket': ['Leather Biker', 'Premium', 'Designer', 'Classic', 'Modern', 'Formal', 'Casual', 'Winter'],
    'Payjama': ['Silk Blend', 'Premium Cotton', 'Linen Casual', 'Silk Designer', 'Classic White', 'Formal Black', 'Handwoven Cotton', 'Bespoke Silk', 'Classic Black', 'Premium Black'],
    'Formal Paint': ['Classic Black', 'Navy Blue', 'Grey Wool', 'Beige Linen', 'Tailored Black', 'Premium Cotton', 'Slim Fit', 'Classic Tan', 'Bespoke', 'Premium'],
    'Safari': ['Safari Summer', 'Beige Safari', 'Summer Safari Coat', 'Classic Safari'],
    'Uniform': ['School Uniform', 'School Blazer', 'Office Uniform', 'Corporate Uniform', 'Hotel Uniform', 'Chef Uniform', 'Security Uniform', 'Hospital Uniform'],
    'Jeans': ['Slim Fit Designer', 'Vintage Wash', 'Premium Denim', 'Classic Blue Slim', 'Black Stretch', 'Blue Dark', 'Black Distressed', 'Ripped Style', 'Premium Raw Denim'],
    'Accessories': ['Designer Waistcoat', 'Leather Belt', 'Silk Tie Set', 'Designer Pocket Square', 'Premium']
  };
  
  const prefix = prefixes[category] ? prefixes[category][index % prefixes[category].length] : category;
  return `${prefix} ${category}`;
}

function generateProductsForCategory(category, images) {
  return images.map((image, index) => ({
    id: `${category}-${index + 1}`,
    name: generateProductName(category, index, image),
    category: category,
    price: Math.floor(Math.random() * 40000) + 5000,
    image: image
  }));
}

const categoryImages = {};
CATEGORIES.slice(1).forEach(category => {
  categoryImages[category] = getImagesForCategory(category);
});

const ALL_PRODUCTS = CATEGORIES.slice(1).flatMap(category => 
  generateProductsForCategory(category, categoryImages[category])
);

export const ALL_PRODUCTS_DATA = ALL_PRODUCTS;

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category');
  const mappedCategory = urlCategory ? (CATEGORY_MAP[urlCategory.toLowerCase()] || 'All') : 'All';
  const [filter, setFilter] = useState(CATEGORIES.includes(mappedCategory) ? mappedCategory : 'All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const addToCart = useCartStore((state) => state.addToCart);

  const filteredProducts = filter === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === filter);
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

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

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 md:mb-8 border-b border-gray-200 pb-4">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat}
              onClick={() => { setFilter(cat); setSearchParams(cat === 'All' ? {} : { category: REVERSE_CATEGORY_MAP[cat] || cat.toLowerCase() }); }}
              className={`text-xs sm:text-sm font-bold uppercase tracking-widest px-2 py-2 transition-colors whitespace-nowrap ${filter === cat ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-black'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {currentItems.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/5] sm:aspect-[3/4] overflow-hidden bg-gray-100 mb-3 sm:mb-4 cursor-pointer">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </Link>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 w-5/6 uppercase text-xs font-black tracking-widest hover:bg-black hover:text-white shadow-lg z-10"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="flex flex-col items-center text-center px-1 sm:px-2">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide mb-1 hover:text-gray-500 transition-colors line-clamp-2">{product.name}</h3>
                  </Link>
                  <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest mb-1">{product.category}</p>
                  <span className="font-black text-sm sm:text-lg">Contact to Owner</span>
                </div>
              </div>
            ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 text-sm font-medium border ${currentPage === page ? 'bg-black text-white border-black' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}