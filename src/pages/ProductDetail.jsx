import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Clock, Package, Truck, Minus, Plus, ChevronDown, ChevronUp, Star, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { ALL_PRODUCTS_DATA } from './Products';
import SEO from '../components/SEO';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCartWithQuantity = useCartStore((state) => state.addToCart);
  
const product = ALL_PRODUCTS_DATA.find(p => p.id === id);
  
  // Similar products
  const suggestedProducts = ALL_PRODUCTS_DATA.filter(p => p.id !== product?.id).slice(0, 4);

  // Mock countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let [h, m, s] = prev.split(':').map(Number);
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
            else { h = 2; m = 30; s = 25; }
          }
        }
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!product) return <div className="min-h-screen pt-32 text-center font-bold text-xl">Product not found.</div>;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": `Premium ${product.category} - ${product.name}. Handcrafted by Poshak Tailors in Raipur, Chhattisgarh.`,
    "brand": {
      "@type": "Brand",
      "name": "Poshak Tailors"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
    <SEO 
      title={product.name}
      description={`Buy premium ${product.category} - ${product.name}. Handcrafted by Poshak Tailors. Free shipping across India. Best price in Raipur.`}
      keywords={`${product.name}, ${product.category}, Poshak Tailors, bespoke ${product.category.toLowerCase()}, wedding wear, Raipur, Chhattisgarh`}
      url={`https://poshaktailors.com/product/${product.id}`}
      image={product.image}
      type="product"
      schema={productSchema}
    />
    <div className="w-full bg-white pb-8 sm:pb-16 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 flex gap-2 items-center cursor-pointer" onClick={() => navigate('/products')}>
          <span>← Home • Product details</span>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20">
          
          {/* Left: Image Gallery (identical to mockup: big rounded box, 3 smaller rounded boxes at bottom inside) */}
          <div className="flex flex-col gap-4 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/5] bg-[#e6e4e3] rounded-[20px] sm:rounded-[32px] overflow-hidden w-full relative h-[300px] sm:h-[450px] md:h-[550px] lg:h-[600px] max-sm:mt-4"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              
              {/* Overlay Thumbnails inside the main div at the bottom, matching mockup */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex gap-2 sm:gap-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md overflow-hidden border border-white/40 cursor-pointer shadow-sm hover:border-white transition-colors">
                    <img src={product.image} alt="Thumbnail view" className="w-full h-full object-cover" style={{ objectPosition: `50% ${num * 20}%` }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col pl-0 lg:pl-10 pt-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-gray-500 text-xs font-medium border border-gray-200 rounded-full px-4 py-1.5 inline-block mb-4">
                {product.category} Fashion
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-gray-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-900">
                Contact to Owner
              </p>

              {/* Delivery Timer Alert */}
              <div className="border border-gray-200 px-3 sm:px-5 py-2 sm:py-3 flex items-center gap-2 text-xs sm:text-sm mb-6 sm:mb-8 w-full max-w-full rounded-full bg-white shadow-sm">
                <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-600 whitespace-nowrap">Order in <span className="font-bold text-gray-900 border-b border-gray-300 mx-1">{timeLeft}</span> to get next day delivery</span>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700">Select Size</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all shadow-sm
                        ${selectedSize === size ? 'bg-[#1c1c1c] text-white' : 'bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4 mb-10">
                <button 
                  onClick={() => addToCartWithQuantity(product, selectedSize)}
                  className="flex-1 bg-[#1c1c1c] text-white rounded-full py-4 text-sm font-medium hover:bg-black transition-colors"
                >
                  Add to Cart
                </button>
                <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors text-gray-600">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Accordions */}
              <div className="border border-gray-100 rounded-3xl overflow-hidden divide-y divide-gray-100 mt-4">
                {/* Description */}
                <div className="px-6 py-5 bg-white">
                  <button onClick={() => setActiveAccordion(activeAccordion === 'desc' ? null : 'desc')} className="w-full flex justify-between items-center text-[15px] font-semibold text-gray-900">
                    <span>Description & Fit</span>
                    {activeAccordion === 'desc' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {activeAccordion === 'desc' && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-gray-500 text-sm mt-4 leading-relaxed bg-white">
                          Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous, but not oversized silhouette. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and hem. Soft, brushed inside.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Shipping */}
                <div className="px-6 py-5 bg-white">
                  <button onClick={() => setActiveAccordion(activeAccordion === 'ship' ? null : 'ship')} className="w-full flex justify-between items-center text-[15px] font-semibold text-gray-900">
                    <span>Shipping</span>
                    {activeAccordion === 'ship' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {activeAccordion === 'ship' && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="grid grid-cols-2 gap-y-6 mt-6">
                          <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-500">%</div>
                            <div>
                              <span className="block text-xs text-gray-400 mb-1">Discount</span>
                              <span className="block font-medium text-sm text-gray-900">Disc 60%</span>
                            </div>
                          </div>
                          <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-500"><Package className="w-4 h-4" /></div>
                            <div>
                              <span className="block text-xs text-gray-400 mb-1">Package</span>
                              <span className="block font-medium text-sm text-gray-900">Regular Package</span>
                            </div>
                          </div>
                          <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-500"><Truck className="w-4 h-4" /></div>
                            <div>
                              <span className="block text-xs text-gray-400 mb-1">Delivery Time</span>
                              <span className="block font-medium text-sm text-gray-900">3-4 Working Days</span>
                            </div>
                          </div>
                          <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-500"><Clock className="w-4 h-4" /></div>
                            <div>
                              <span className="block text-xs text-gray-400 mb-1">Estimated Notice</span>
                              <span className="block font-medium text-sm text-gray-900">10 - 12 October 2024</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Rating and Reviews (matching mockup layout) */}
        <div className="py-16">
          <h2 className="text-[22px] font-semibold text-gray-900 mb-12">Rating & Reviews</h2>
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Left: Summary */}
            <div className="flex gap-8 pr-12 pb-8 md:pb-0 items-center">
              <div className="flex flex-col">
                <div className="flex items-end gap-1">
                  <span className="text-[80px] font-medium tracking-tighter leading-none text-gray-900">4,5</span>
                  <span className="text-[28px] text-gray-400 font-medium mb-3">/ 5</span>
                </div>
                <p className="text-[13px] text-gray-400 mt-2">(80 New Reviews)</p>
              </div>
              
              <div className="flex flex-col gap-[6px] w-[200px]">
                {[5, 4, 3, 2, 1].map((rating, i) => (
                  <div key={rating} className="flex items-center gap-3 text-[13px] text-gray-700 font-medium">
                    <div className="flex items-center gap-1 w-6">
                      <Star className="w-[10px] h-[10px] fill-yellow-400 text-yellow-400" />
                      <span>{rating}</span>
                    </div>
                    <div className="h-[4px] bg-gray-100 rounded-full flex-1 overflow-hidden relative">
                        <div className="absolute top-0 left-0 h-full bg-gray-900 rounded-full" style={{ width: i === 0 ? '75%' : i === 1 ? '15%' : i === 2 ? '5%' : '2%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Review Display */}
            <div className="flex-1 pl-0 md:pl-12 pt-8 md:pt-0">
              <div className="bg-white border border-gray-100 rounded-[28px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alex Mathis</h3>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-[14px] h-[14px] fill-yellow-400 text-yellow-400" />)}
                    </div>
                  </div>
                  <span className="text-[13px] text-gray-400">18 Oct 2024</span>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed mt-4 mb-6">
                  "NextGen's dedication to sustainability and ethical practices resonates strongly with today's consumers, positioning the brand as a responsible choice in the fashion world."
                </p>
                
                {/* User Avatar + Indicators */}
                <div className="flex flex-col items-center gap-8 border-b-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden self-start">
                     <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="User Avatar" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Indicators at the bottom center of the review card */}
                  <div className="flex gap-3 justify-center w-full">
                     <div className="h-1 w-12 bg-gray-900 rounded-full"></div>
                     <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
                  </div>
                </div>

                {/* Right Arrow Button Mock */}
                <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* You Might Also Like */}
        <div className="pt-20 text-center">
          <h2 className="text-xl sm:text-3xl tracking-tight text-gray-900 font-medium mb-8 sm:mb-12">You might also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {suggestedProducts.map((p) => (
              <div key={p.id} className="group flex flex-col cursor-pointer" onClick={() => {
                navigate(`/product/${p.id}`);
                window.scrollTo(0, 0);
              }}>
                <div className="relative aspect-[3/5] sm:aspect-[3/4] overflow-hidden bg-gray-100 rounded-[16px] sm:rounded-[24px] mb-3 sm:mb-4">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-semibold text-xs sm:text-[15px] text-gray-900 leading-tight mb-1 truncate">{p.name}</h3>
                <div className="flex gap-[2px] mb-1 sm:mb-2 items-center">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-[10px] sm:w-[12px] h-[10px] sm:h-[12px] fill-yellow-400 text-yellow-400" />)}
                  <span className="text-[10px] sm:text-[12px] text-gray-500 font-medium ml-1">4.5/5</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-xs sm:text-sm text-gray-900">Contact to Owner</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
