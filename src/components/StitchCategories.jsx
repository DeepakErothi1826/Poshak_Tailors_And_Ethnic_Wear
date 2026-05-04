import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// ============================================
// SUIT IMAGES - All from Suit folder
// ============================================
import suit1 from '../Image/Suit/suit_044.jpg';
import suit2 from '../Image/Suit/suit_045.jpg';
import suit3 from '../Image/Suit/suit_046.jpg';
import suit4 from '../Image/Suit/suit_047.jpg';
import suit5 from '../Image/Suit/suit_048.jpg';
import suit6 from '../Image/Suit/suit_049.jpg';
import suit7 from '../Image/Suit/suit_050.jpg';
import suit8 from '../Image/Suit/suit_051.jpg';
import suit9 from '../Image/Suit/suit_052.jpg';
import suit10 from '../Image/Suit/suit_053.jpg';
import suit11 from '../Image/Suit/suit_054.jpg';
import suit12 from '../Image/Suit/suit_055.jpg';
import suit13 from '../Image/Suit/suit_056.jpg';
import suit14 from '../Image/Suit/suit_057.jpg';
import suit15 from '../Image/Suit/suit_058.jpg';
import suit16 from '../Image/Suit/suit_059.jpg';
import suit17 from '../Image/Suit/suit_060.jpg';
import suit18 from '../Image/Suit/suit_061.jpg';
import suit19 from '../Image/Suit/suit_062.jpg';
import suit20 from '../Image/Suit/suit_063.jpg';
import suit21 from '../Image/Suit/suit_064.jpg';
import suit22 from '../Image/Suit/suit_065.jpg';
import suit23 from '../Image/Suit/suit_066.jpg';
import suit24 from '../Image/Suit/suit_067.jpg';
import suit25 from '../Image/Suit/suit_068.jpg';
import suit26 from '../Image/Suit/suit_069.jpg';
import suit27 from '../Image/Suit/suit_070.jpg';
import suit28 from '../Image/Suit/suit_071.jpg';
import suit29 from '../Image/Suit/suit_072.jpg';
import suit30 from '../Image/Suit/suit_073.jpg';
import suit31 from '../Image/Suit/suit_074.jpg';
import suit32 from '../Image/Suit/suit_075.jpg';
import suit33 from '../Image/Suit/suit_076.jpg';
import suit34 from '../Image/Suit/suit_077.jpg';

const SUIT_IMAGES = [suit1, suit2, suit3, suit4, suit5, suit6, suit7, suit8, suit9, suit10, suit11, suit12, suit13, suit14, suit15, suit16, suit17, suit18, suit19, suit20, suit21, suit22, suit23, suit24, suit25, suit26, suit27, suit28, suit29, suit30, suit31, suit32, suit33, suit34];

// ============================================
// SHERWANI IMAGES - All from Sherwani folder
// ============================================
import sherwani1 from '../Image/Sherwani/sherwani_27.jpg';
import sherwani2 from '../Image/Sherwani/sherwani_28.jpg';
import sherwani3 from '../Image/Sherwani/sherwani_29.jpg';
import sherwani4 from '../Image/Sherwani/sherwani_30.jpg';
import sherwani5 from '../Image/Sherwani/sherwani_31.jpg';
import sherwani6 from '../Image/Sherwani/sherwani_32.jpg';
import sherwani7 from '../Image/Sherwani/sherwani_33.jpg';
import sherwani8 from '../Image/Sherwani/sherwani_34.jpg';
import sherwani9 from '../Image/Sherwani/sherwani_35.jpg';
import sherwani10 from '../Image/Sherwani/sherwani_36.jpg';
import sherwani11 from '../Image/Sherwani/sherwani_37.jpg';
import sherwani12 from '../Image/Sherwani/sherwani_38.jpg';
import sherwani13 from '../Image/Sherwani/sherwani_39.jpg';
import sherwani14 from '../Image/Sherwani/sherwani_40.jpg';
import sherwani15 from '../Image/Sherwani/sherwani_41.jpg';
import sherwani16 from '../Image/Sherwani/sherwani_42.jpg';
import sherwani17 from '../Image/Sherwani/sherwani_43.jpg';
import sherwani18 from '../Image/Sherwani/sherwani_44.jpg';
import sherwani19 from '../Image/Sherwani/sherwani_45.jpg';
import sherwani20 from '../Image/Sherwani/sherwani_46.jpg';
import sherwani21 from '../Image/Sherwani/sherwani_47.jpg';
import sherwani22 from '../Image/Sherwani/sherwani_48.jpg';
import sherwani23 from '../Image/Sherwani/sherwani_49.jpg';
import sherwani24 from '../Image/Sherwani/sherwani_50.jpg';
import sherwani25 from '../Image/Sherwani/sherwani_51.jpg';
import sherwani26 from '../Image/Sherwani/sherwani_52.jpg';
import sherwani27 from '../Image/Sherwani/sherwani_53.jpg';
import sherwani28 from '../Image/Sherwani/sherwani_54.jpg';
import sherwani29 from '../Image/Sherwani/sherwani_55.jpg';

const SHERWANI_IMAGES = [sherwani1, sherwani2, sherwani3, sherwani4, sherwani5, sherwani6, sherwani7, sherwani8, sherwani9, sherwani10, sherwani11, sherwani12, sherwani13, sherwani14, sherwani15, sherwani16, sherwani17, sherwani18, sherwani19, sherwani20, sherwani21, sherwani22, sherwani23, sherwani24, sherwani25, sherwani26, sherwani27, sherwani28, sherwani29];

// ============================================
// PATHANI IMAGES - All from Pathani folder
// ============================================
import pathani1 from '../Image/Pathani/pathani_27.jpg';
import pathani2 from '../Image/Pathani/pathani_28.jpg';
import pathani3 from '../Image/Pathani/pathani_29.jpg';
import pathani4 from '../Image/Pathani/pathani_30.jpg';
import pathani5 from '../Image/Pathani/pathani_31.jpg';
import pathani6 from '../Image/Pathani/pathani_32.jpg';
import pathani7 from '../Image/Pathani/pathani_33.jpg';
import pathani8 from '../Image/Pathani/pathani_34.jpg';
import pathani9 from '../Image/Pathani/pathani_35.jpg';
import pathani10 from '../Image/Pathani/pathani_36.jpg';
import pathani11 from '../Image/Pathani/pathani_37.jpg';
import pathani12 from '../Image/Pathani/pathani_38.jpg';
import pathani13 from '../Image/Pathani/pathani_39.jpg';
import pathani14 from '../Image/Pathani/pathani_40.jpg';
import pathani15 from '../Image/Pathani/pathani_41.jpg';
import pathani16 from '../Image/Pathani/pathani_42.jpg';
import pathani17 from '../Image/Pathani/pathani_43.jpg';
import pathani18 from '../Image/Pathani/pathani_44.jpg';
import pathani19 from '../Image/Pathani/pathani_45.jpg';
import pathani20 from '../Image/Pathani/pathani_46.jpg';
import pathani21 from '../Image/Pathani/pathani_47.jpg';
import pathani22 from '../Image/Pathani/pathani_48.jpg';
import pathani23 from '../Image/Pathani/pathani_49.jpg';
import pathani24 from '../Image/Pathani/pathani_50.jpg';
import pathani25 from '../Image/Pathani/pathani_51.jpg';

const PATHANI_IMAGES = [pathani1, pathani2, pathani3, pathani4, pathani5, pathani6, pathani7, pathani8, pathani9, pathani10, pathani11, pathani12, pathani13, pathani14, pathani15, pathani16, pathani17, pathani18, pathani19, pathani20, pathani21, pathani22, pathani23, pathani24, pathani25];

// ============================================
// KURTA IMAGES - All from kurta folder
// ============================================
import kurta1 from '../Image/kurta/download (91).jpg';
import kurta2 from '../Image/kurta/download (92).jpg';
import kurta3 from '../Image/kurta/download (93).jpg';
import kurta4 from '../Image/kurta/download (94).jpg';
import kurta5 from '../Image/kurta/download (95).jpg';
import kurta6 from '../Image/kurta/download (96).jpg';
import kurta7 from '../Image/kurta/download (97).jpg';
import kurta8 from '../Image/kurta/download (98).jpg';

const KURTA_IMAGES = [kurta1, kurta2, kurta3, kurta4, kurta5, kurta6, kurta7, kurta8];

// ============================================
// BLAZER IMAGES - All from Blazer folder
// ============================================
import blazer1 from '../Image/Blazer/suit_044.jpg';
import blazer2 from '../Image/Blazer/suit_045.jpg';
import blazer3 from '../Image/Blazer/suit_046.jpg';
import blazer4 from '../Image/Blazer/suit_047.jpg';
import blazer5 from '../Image/Blazer/suit_048.jpg';
import blazer6 from '../Image/Blazer/suit_049.jpg';
import blazer7 from '../Image/Blazer/suit_050.jpg';
import blazer8 from '../Image/Blazer/suit_056.jpg';
import blazer9 from '../Image/Blazer/suit_057.jpg';
import blazer10 from '../Image/Blazer/suit_058.jpg';
import blazer11 from '../Image/Blazer/suit_059.jpg';
import blazer12 from '../Image/Blazer/suit_060.jpg';
import blazer13 from '../Image/Blazer/suit_061.jpg';
import blazer14 from '../Image/Blazer/suit_062.jpg';

const BLAZER_IMAGES = [blazer1, blazer2, blazer3, blazer4, blazer5, blazer6, blazer7, blazer8, blazer9, blazer10, blazer11, blazer12, blazer13, blazer14];

// ============================================
// INDO-WESTERN IMAGES - All from Indo-Western folder
// ============================================
import indoWestern1 from '../Image/indo-Western/download (91).jpg';
import indoWestern2 from '../Image/indo-Western/download (92).jpg';
import indoWestern3 from '../Image/indo-Western/download (93).jpg';
import indoWestern4 from '../Image/indo-Western/download (94).jpg';
import indoWestern5 from '../Image/indo-Western/download (95).jpg';
import indoWestern6 from '../Image/indo-Western/download (96).jpg';
import indoWestern7 from '../Image/indo-Western/download (97).jpg';
import indoWestern8 from '../Image/indo-Western/download (98).jpg';
import indoWestern9 from '../Image/indo-Western/AR.jpg';
import indoWestern10 from '../Image/indo-Western/Bohame.jpg';

const INDO_WESTERN_IMAGES = [indoWestern1, indoWestern2, indoWestern3, indoWestern4, indoWestern5, indoWestern6, indoWestern7, indoWestern8, indoWestern9, indoWestern10];

// ============================================
// SHIRT IMAGES - All from Shirt folder
// ============================================
import shirt1 from '../Image/Shirt/download (91).jpg';
import shirt2 from '../Image/Shirt/download (92).jpg';
import shirt3 from '../Image/Shirt/download (93).jpg';
import shirt4 from '../Image/Shirt/download (94).jpg';
import shirt5 from '../Image/Shirt/download (95).jpg';
import shirt6 from '../Image/Shirt/download (96).jpg';
import shirt7 from '../Image/Shirt/Men Summer Fit.jpg';
import shirt8 from '../Image/Shirt/mens fashion.jpg';

const SHIRT_IMAGES = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8];

// ============================================
// JACKET IMAGES - All from Jacket folder
// ============================================
import jacket1 from '../Image/Jacket/download (91).jpg';
import jacket2 from '../Image/Jacket/download (92).jpg';
import jacket3 from '../Image/Jacket/download (93).jpg';
import jacket4 from '../Image/Jacket/download (94).jpg';
import jacket5 from '../Image/Jacket/download (95).jpg';
import jacket6 from '../Image/Jacket/download (96).jpg';
import jacket7 from '../Image/Jacket/Urban Wear.jpg';
import jacket8 from '../Image/Jacket/Fashion.jpg';

const JACKET_IMAGES = [jacket1, jacket2, jacket3, jacket4, jacket5, jacket6, jacket7, jacket8];

// ============================================
// PAYJAMA IMAGES - All from Payjama folder (26 images)
// ============================================
import payjama1 from '../Image/Payjama/download (91).jpg';
import payjama2 from '../Image/Payjama/download (92).jpg';
import payjama3 from '../Image/Payjama/download (93).jpg';
import payjama4 from '../Image/Payjama/download (94).jpg';
import payjama5 from '../Image/Payjama/download (95).jpg';
import payjama6 from '../Image/Payjama/download (96).jpg';
import payjama7 from '../Image/Payjama/download (97).jpg';
import payjama8 from '../Image/Payjama/download (98).jpg';
import payjama9 from '../Image/Payjama/Ivory Embroidered Kurta for Festive Occasions.jpg';
import payjama10 from '../Image/Payjama/Hardik Pandya in traditional Indian Wedding Kurta.jpg';

const PAYJAMA_IMAGES = [payjama1, payjama2, payjama3, payjama4, payjama5, payjama6, payjama7, payjama8, payjama9, payjama10];

// ============================================
// FORMAL PAINT IMAGES - All from formal paint folder
// ============================================
import formalPaint1 from '../Image/formal paint/download (91).jpg';
import formalPaint2 from '../Image/formal paint/download (92).jpg';
import formalPaint3 from '../Image/formal paint/download (93).jpg';
import formalPaint4 from '../Image/formal paint/download (94).jpg';
import formalPaint5 from '../Image/formal paint/download (95).jpg';
import formalPaint6 from '../Image/formal paint/download (96).jpg';

const FORMAL_PAINT_IMAGES = [formalPaint1, formalPaint2, formalPaint3, formalPaint4, formalPaint5, formalPaint6];

// ============================================
// SAFARI IMAGES - All from Safari suit folder
// ============================================
import safari1 from '../Image/Safari suit/download (91).jpg';
import safari2 from '../Image/Safari suit/download (92).jpg';
import safari3 from '../Image/Safari suit/download (93).jpg';
import safari4 from '../Image/Safari suit/download (94).jpg';
import safari5 from '../Image/Safari suit/download (95).jpg';
import safari6 from '../Image/Safari suit/download (96).jpg';
import safari7 from '../Image/Safari suit/download (97).jpg';
import safari8 from '../Image/Safari suit/Safari Navy Suit.jpg';

const SAFARI_IMAGES = [safari1, safari2, safari3, safari4, safari5, safari6, safari7, safari8];

// ============================================
// UNIFORM IMAGES - All from uniform folder
// ============================================
import uniform1 from '../Image/uniform/download (100).jpg';
import uniform2 from '../Image/uniform/download (99).jpg';
import uniform3 from '../Image/uniform/download (98).jpg';
import uniform4 from '../Image/uniform/download (97).jpg';
import uniform5 from '../Image/uniform/download - 2026-05-04T102900.669.jpg';
import uniform6 from '../Image/uniform/download - 2026-05-04T102916.792.jpg';
import uniform7 from '../Image/uniform/download - 2026-05-04T102922.291.jpg';
import uniform8 from '../Image/uniform/download - 2026-05-04T102929.079.jpg';
import uniform9 from '../Image/uniform/download - 2026-05-04T102936.354.jpg';
import uniform10 from '../Image/uniform/download - 2026-05-04T102942.694.jpg';

const UNIFORM_IMAGES = [uniform1, uniform2, uniform3, uniform4, uniform5, uniform6, uniform7, uniform8, uniform9, uniform10];

// ============================================
// JEANS IMAGES - All from jeans folder (25 images)
// ============================================
import jeans1 from '../Image/jeans/download - 2026-05-04T103305.281.jpg';
import jeans2 from '../Image/jeans/download - 2026-05-04T103310.119.jpg';
import jeans3 from '../Image/jeans/download - 2026-05-04T103316.842.jpg';
import jeans4 from '../Image/jeans/download - 2026-05-04T103708.221.jpg';
import jeans5 from '../Image/jeans/download - 2026-05-04T103729.487.jpg';
import jeans6 from '../Image/jeans/Men Distressed Vintage Loose Fit Straight Leg Casual Jeans.jpg';
import jeans7 from '../Image/jeans/Lee Men\'s Modern Series Relaxed-Fit Bootcut Jean.jpg';
import jeans8 from '../Image/jeans/Levi\'s Men\'s 541 Athletic Fit Jeans.jpg';
import jeans9 from '../Image/jeans/Levi\'s Men\'s 569 Loose Straight Fit Jeans.jpg';
import jeans10 from '../Image/jeans/Bleecker High Rise Wide Leg Jeans.jpg';
import jeans11 from '../Image/jeans/baggy jeans trend 2026.jpg';
import jeans12 from '../Image/jeans/Vintage Cool Faded Tinted Baggy Denims.jpg';
import jeans13 from '../Image/jeans/Cool- Clean- Classy _ Aesthetic outfit White shirt.jpg';
import jeans14 from '../Image/jeans/outfit inspo.jpg';
import jeans15 from '../Image/jeans/Mens Next Classic Stretch Jeans - Blue.jpg';
import jeans16 from '../Image/jeans/Saman Amel - Slim-Fit Straight-Leg Jeans.jpg';
import jeans17 from '../Image/jeans/download - 2026-05-04T103305.281.jpg';
import jeans18 from '../Image/jeans/download - 2026-05-04T103310.119.jpg';
import jeans19 from '../Image/jeans/download - 2026-05-04T103316.842.jpg';
import jeans20 from '../Image/jeans/download - 2026-05-04T103708.221.jpg';
import jeans21 from '../Image/jeans/download - 2026-05-04T103729.487.jpg';
import jeans22 from '../Image/jeans/Men Distressed Vintage Loose Fit Straight Leg Casual Jeans.jpg';
import jeans23 from '../Image/jeans/Lee Men\'s Modern Series Relaxed-Fit Bootcut Jean.jpg';
import jeans24 from '../Image/jeans/Levi\'s Men\'s 541 Athletic Fit Jeans.jpg';
import jeans25 from '../Image/jeans/Levi\'s Men\'s 569 Loose Straight Fit Jeans.jpg';

const JEANS_IMAGES = [jeans1, jeans2, jeans3, jeans4, jeans5, jeans6, jeans7, jeans8, jeans9, jeans10, jeans11, jeans12, jeans13, jeans14, jeans15, jeans16, jeans17, jeans18, jeans19, jeans20, jeans21, jeans22, jeans23, jeans24, jeans25];

// ============================================
// ACCESSORIES IMAGES - All from Accessories folder
// ============================================
import accessories1 from '../Image/Accessories/download (91).jpg';
import accessories2 from '../Image/Accessories/download (92).jpg';
import accessories3 from '../Image/Accessories/download (93).jpg';
import accessories4 from '../Image/Accessories/download (94).jpg';
import accessories5 from '../Image/Accessories/download (95).jpg';
import accessories6 from '../Image/Accessories/download (96).jpg';
import accessories7 from '../Image/Accessories/download (97).jpg';
import accessories8 from '../Image/Accessories/download (98).jpg';
import accessories9 from '../Image/Accessories/download (99).jpg';
import accessories10 from '../Image/Accessories/download (100).jpg';
import accessories11 from '../Image/Accessories/Jutti.jpg';
import accessories12 from '../Image/Accessories/Pinterest.jpg';
import accessories13 from '../Image/Accessories/suit.jpg';

const ACCESSORIES_IMAGES = [accessories1, accessories2, accessories3, accessories4, accessories5, accessories6, accessories7, accessories8, accessories9, accessories10, accessories11, accessories12, accessories13];

// ============================================
// CATEGORY CONFIGURATION - Each category uses images from its own folder
// ============================================
const CATEGORY_CONFIG = [
  { folder: 'Suit', name: 'Suit', route: '/products?category=suit', images: SUIT_IMAGES },
  { folder: 'Sherwani', name: 'Sherwani', route: '/products?category=sherwani', images: SHERWANI_IMAGES },
  { folder: 'Pathani', name: 'Pathani', route: '/products?category=pathani', images: PATHANI_IMAGES },
  { folder: 'kurta', name: 'Kurta', route: '/products?category=kurta', images: KURTA_IMAGES },
  { folder: 'Blazer', name: 'Blazer', route: '/products?category=blazer', images: BLAZER_IMAGES },
  { folder: 'indo-Western', name: 'Indo-Western', route: '/products?category=indo-western', images: INDO_WESTERN_IMAGES },
  { folder: 'Shirt', name: 'Shirt', route: '/products?category=shirt', images: SHIRT_IMAGES },
  { folder: 'Jacket', name: 'Jacket', route: '/products?category=jacket', images: JACKET_IMAGES },
  { folder: 'Payjama', name: 'Payjama', route: '/products?category=payjama', images: PAYJAMA_IMAGES },
  { folder: 'formal paint', name: 'Formal Paint', route: '/products?category=formal-paint', images: FORMAL_PAINT_IMAGES },
  { folder: 'Safari suit', name: 'Safari', route: '/products?category=safari', images: SAFARI_IMAGES },
  { folder: 'uniform', name: 'Uniform', route: '/products?category=uniform', images: UNIFORM_IMAGES },
  { folder: 'jeans', name: 'Jeans', route: '/products?category=jeans', images: JEANS_IMAGES },
  { folder: 'Accessories', name: 'Accessories', route: '/products?category=accessories', images: ACCESSORIES_IMAGES },
];

// ============================================
// PLACEHOLDER
// ============================================
const PlaceholderImage = () => (
  <svg className="w-full h-full" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="#f3f4f6" />
    <path d="M150 180h100v80h-100z" fill="#d1d5db" />
    <path d="M140 260h120l-60 80z" fill="#d1d5db" />
    <path d="M120 340h160v50h-160z" fill="#d1d5db" />
    <path d="M100 390h200v70h-200z" fill="#d1d5db" />
  </svg>
);

// ============================================
// SKELETON
// ============================================
function CategorySkeleton() {
  return <div className="animate-pulse"><div className="aspect-[3/4] bg-gray-200 rounded-xl" /></div>;
}

// ============================================
// CATEGORY CARD
// ============================================
function CategoryCard({ category, index }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const images = category.images;
  const totalImages = images.length;

  useEffect(() => {
    if (isHovered && totalImages > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalImages);
        setImageLoaded(false);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isHovered, totalImages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link to={category.route} className="group block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={category.name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {totalImages > 1 && (
            <>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/60 px-2 py-1 rounded-full z-10">
                <span className="text-white text-[10px] font-medium">{currentIndex + 1}/{totalImages}</span>
              </div>
            </>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h3 className="text-white text-base sm:text-lg font-bold uppercase tracking-wider text-center drop-shadow-lg">
              {category.name}
            </h3>
            <p className="text-white/70 text-[10px] text-center mt-0.5">{totalImages} Designs</p>
          </div>
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 rounded-xl transition-all duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function StitchCategories() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2">Stitch Categories</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Explore our bespoke tailoring services</p>
          <div className="w-16 h-0.5 bg-black mx-auto mt-3" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {isLoading ? Array.from({ length: 14 }).map((_, i) => <CategorySkeleton key={i} />) : CATEGORY_CONFIG.map((category, index) => <CategoryCard key={category.folder} category={category} index={index} />)}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 uppercase text-xs font-bold tracking-widest hover:bg-gray-800 transition-colors rounded-lg">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}