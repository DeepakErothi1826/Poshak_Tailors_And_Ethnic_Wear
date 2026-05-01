import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/useCartStore';
import { ArrowRight, Star, Award, Clock, Truck, Shield, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import kurtaHero from '../Image/hero_kurta.jpg';
import blazerHero from '../Image/hero_blazer.jpg';
import hero1Img from '../Image/hero_main.png';

import collection1 from '../Image/suit_17.jpg';
import collection2 from '../Image/suit_16.jpg';
import collection3 from '../Image/suit_15.jpg';

import product1 from '../Image/sherwani_1.jpg';
import product2 from '../Image/suit_1.jpg';
import product3 from '../Image/kurta_4.jpg';
import product4 from '../Image/kurta_1.jpg';
import craftImg from '../Image/suit_12.jpg';
import heritageImg from '../Image/suit_11.jpg';

import serviceImg1 from '../Image/kurta_2.jpg';
import serviceImg2 from '../Image/kurta_3.jpg';
import serviceImg3 from '../Image/kurta_4.jpg';
import serviceImg4 from '../Image/kurta_5.jpg';
import ctaImg from '../Image/kurta_6.jpg';
import gallery1 from '../Image/sherwani_2.jpg';
import gallery2 from '../Image/sherwani_3.jpg';
import gallery3 from '../Image/sherwani_4.jpg';
import gallery4 from '../Image/sherwani_5.jpg';
import gallery5 from '../Image/kurta_7.jpg';
import gallery6 from '../Image/kurta_8.jpg';

const HERO_SLIDES = [
  {
    image: hero1Img,
    title: 'POSHAK TAILOR & ETHNIC WEAR',
    subtitle: 'Since 1995',
    tagline: '"GOD MAKES MAN WE MAKE GENTLEMAN"',
    isBrandSlide: true
  },
  {
    image: kurtaHero,
    title: 'Ethnic Wear',
    subtitle: 'Traditional Elegance',
    isBrandSlide: false
  },
  {
    image: blazerHero,
    title: 'Designer Blazers',
    subtitle: 'Modern Sophistication',
    isBrandSlide: false
  },
  {
    image: hero1Img,
    title: 'Bespoke Suits',
    subtitle: 'Perfect Fit',
    isBrandSlide: false
  }
];

const HERO_IMAGES = [
  collection1,
  collection2,
  collection3
];

const PRODUCTS = [
  { id: 1, name: 'Zardosi Embroidered Sherwani', price: 45000, image: product1 },
  { id: 2, name: 'Velvet Zari Bandhgala Suit', price: 28500, image: product2 },
  { id: 3, name: 'Handwoven Benarasi Kurta', price: 18000, image: product3 },
  { id: 4, name: 'Classic Black Tuxedo', price: 22000, image: product4 },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <SEO 
      title="Poshak Tailors And Ethnic Wear | Best Bespoke Suits & Sherwani in Raipur"
      description="Premier bespoke tailoring and ethnic wear in Raipur, Chhattisgarh. Expert crafting of sherwanis, suits, kurtas, and wedding wear since 1995. Free shipping across India."
      keywords="Poshak Tailors, ethnic wear, bespoke tailoring, sherwani, suit, kurta, wedding wear, Raipur, Chhattisgarh, menswear, party wear, formal suits, Indo-Western, Jodhpuri suit, Bandhgala"
    />
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] sm:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.div 
          key={currentSlide}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-3 sm:px-4"
        >
          {HERO_SLIDES[currentSlide].isBrandSlide ? (
            <>
              <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 sm:mb-6 text-balance">
                {HERO_SLIDES[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>
              <p className="text-xs sm:text-sm md:text-lg italic text-gray-300 font-light tracking-wide mb-6 sm:mb-8">
                {HERO_SLIDES[currentSlide].tagline}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-white/90 text-xs sm:text-sm md:text-md uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-3 sm:mb-4">{HERO_SLIDES[currentSlide].subtitle}</h2>
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-4 sm:mb-6 md:mb-8">
                {HERO_SLIDES[currentSlide].title}
              </h1>
            </>
          )}
          <Link to="/products" className="bg-white text-black px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 uppercase text-xs sm:text-xs md:text-sm font-bold tracking-widest hover:bg-gray-200 transition-colors inline-flex items-center gap-2 group">
            Explore Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Sliding Progress Bars */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 w-full flex justify-center gap-2 sm:gap-4 z-20 px-4">
          {HERO_SLIDES.map((_, idx) => (
            <div key={idx} className="h-1 w-12 sm:w-16 md:w-24 bg-gray-600 overflow-hidden cursor-pointer" onClick={() => setCurrentSlide(idx)}>
              <div
                className={`h-full bg-white transition-all duration-[5000ms] ease-linear origin-left ${currentSlide === idx ? 'w-full' : currentSlide > idx ? 'w-full !duration-0' : 'w-0 !duration-0'}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full overflow-hidden bg-black text-white py-4 border-y border-gray-800">
        <div className="marquee-container">
          <div className="marquee-content text-xs font-bold uppercase tracking-[0.3em] flex gap-8">
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
          </div>
          <div className="marquee-content text-xs font-bold uppercase tracking-[0.3em] flex gap-8">
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
            <span>POSHAK TAILORS ✦ ETHNIC WEAR ✦ BESPOKE DESIGN ✦</span>
          </div>
        </div>
      </div>

      {/* Top Collections (Wireframe Match) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Top Collections</h2>
            <p className="text-gray-500 max-w-md text-sm">Discover our carefully curated selections of ethnic wear and bespoke tailoring for every occasion.</p>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center gap-2 uppercase tracking-widest text-xs font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {['Men\'s Ethnic', 'Designer Kurtas', 'Custom Tailoring'].map((category, idx) => (
            <Link to="/products" key={idx}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group cursor-pointer relative bg-gray-100 aspect-[3/4] overflow-hidden"
              >
                <img src={HERO_IMAGES[idx]} alt={category} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 sm:p-6">
                  <div>
                    <h3 className="text-white text-sm sm:text-xl font-bold uppercase tracking-wider">{category}</h3>
                    <p className="text-gray-300 text-[10px] sm:text-xs uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">Explore Collection</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Craftsmanship Process */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter">The Art of <br /> Tailoring</h2>
              <p className="text-gray-600 leading-relaxed max-w-md">Every garment at Poshak Tailors undergoes a rigorous journey of perfection. From the initial consultation and measurement mapping to the final exquisite hand-finishings. We do not just sew fabrics; we sculpt them to your silhouette.</p>
              <div className="space-y-6">
                {[
                  { title: "Consultation", desc: "Understanding your persona and selecting global premium fabrics." },
                  { title: "Master Drafting", desc: "Precision measurements to map out your unique silhouette." },
                  { title: "Artisan Crafting", desc: "Hand-stitching and zardosi detailing by our expert tailors." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-gray-300 font-black text-3xl">0{idx + 1}</div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wider mb-1 text-sm">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
              <img src={craftImg} alt="Tailoring Craft" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products (Aesthetic Match) */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Trending Now</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {['Sherwani', 'Kurta Sets', 'Bandhgala', 'Accessories'].map((tag) => (
                <span key={tag} className="border border-gray-300 px-4 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-black hover:text-white transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-[3/5] sm:aspect-[3/4] overflow-hidden bg-gray-200 mb-3 sm:mb-4 cursor-pointer">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </Link>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 sm:p-6 duration-300 pointer-events-none">
                    <button
                      onClick={(e) => { e.preventDefault(); addToCart(product); }}
                      className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-4 sm:px-6 py-2 sm:py-4 uppercase text-xs font-black tracking-widest hover:bg-black hover:text-white shadow-xl pointer-events-auto"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 mt-2">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide leading-tight hover:text-gray-500 transition-colors">{product.name}</h3>
                  </Link>
                  <span className="font-black text-xs sm:text-sm">Contact to Owner</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/products" className="border-2 border-black px-10 py-4 uppercase text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-colors">
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story / Parallax Block */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full opacity-40">
          <img src={heritageImg} alt="Tailoring Heritage" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h2 className="text-sm uppercase tracking-[0.5em] mb-6">Our Heritage</h2>
          <p className="text-2xl md:text-4xl font-light leading-relaxed mb-8 font-serif italic text-balance">
            "Reflect your unique persona with bespoke tailoring. Three decades of masterful craftsmanship, blending rich traditions with modern aesthetic."
          </p>
          <Link to="/about" className="border border-white hover:bg-white hover:text-black transition-colors px-8 py-4 uppercase text-sm font-bold tracking-widest">
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Client Experience</h2>
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-12">Unparalleled Elegance</h3>

          <div className="flex justify-center items-center gap-1 mb-6">
            <Star className="w-5 h-5 fill-black text-black" />
            <Star className="w-5 h-5 fill-black text-black" />
            <Star className="w-5 h-5 fill-black text-black" />
            <Star className="w-5 h-5 fill-black text-black" />
            <Star className="w-5 h-5 fill-black text-black" />
          </div>
          <p className="text-xl md:text-2xl font-light leading-relaxed italic text-gray-800 mb-8 text-balance">
            "I got my wedding Sherwani tailored here, and the attention to detail was immaculate.
            They truly understand the bespoke experience. Highly recommended."
          </p>
          <p className="font-bold uppercase tracking-widest text-sm">— Anirudh Sharma</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Why Choose Poshak</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Three decades of excellence in bespoke tailoring and ethnic wear.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: "30+ Years Experience", desc: "Decades of mastered craftsmanship passed through generations." },
              { icon: <Shield className="w-8 h-8" />, title: "Premium Quality", desc: "Only the finest fabrics sourced from around the world." },
              { icon: <Clock className="w-8 h-8" />, title: "Timely Delivery", desc: "On-time delivery with no compromise on quality." },
              { icon: <Truck className="w-8 h-8" />, title: " PAN India Shipping", desc: "Delivering excellence to every corner of the nation." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center p-8 border border-gray-800 hover:border-white transition-colors"
              >
                <div className="inline-flex p-4 bg-white/10 rounded-full mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">Our Services</h2>
              <p className="text-gray-500 max-w-md">Comprehensive tailoring solutions for every need.</p>
            </div>
            <Link to="/products" className="hidden md:inline-flex items-center gap-2 uppercase tracking-widest text-xs font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { image: serviceImg1, title: "Bespoke Suits", desc: "Custom-tailored suits crafted to your exact measurements." },
              { image: serviceImg2, title: "Wedding Collection", desc: "Exquisite sherwanis and groom wear for your special day." },
              { image: serviceImg3, title: "Ethnic Wear", desc: "Traditional kurtas, pathanis, and Indo-western ensembles." },
              { image: serviceImg4, title: "Alterations", desc: "Expert alterations to give your old favorites a new life." }
            ].map((service, i) => (
              <Link to="/products" key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden mb-3 sm:mb-4">
                    <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold uppercase tracking-wider mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "Happy Clients" },
              { number: "30+", label: "Years of Excellence" },
              { number: "100+", label: "Skilled Artisans" },
              { number: "4.9", label: "Customer Rating" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">{stat.number}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Our Work</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A glimpse of our bespoke creations crafted for discerning clientele.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">What Clients Say</h2>
            <p className="text-gray-500">Real stories from our valued customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Vikram Singh", role: "Wedding Client", text: "The team understood my vision perfectly. My wedding sherwani was beyond expectations. Truly professional!" },
              { name: "Rohit Mehta", role: "Corporate Client", text: "Excellent tailoring for our corporate event. The suits were impeccable and fit perfectly." },
              { name: "Aman Agarwal", role: "Regular Customer", text: "Been a customer for 5 years now. The quality and service consistency is remarkable. Highly recommended!" }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-black text-black" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaImg} alt="CTA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Ready to Elevate Your Style?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Book your consultation today and experience the art of bespoke tailoring.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-black px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-gray-200 transition-colors">
              Book Appointment
            </a>
            <a href="tel:09827165995" className="border-2 border-white text-white px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
