import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import kurtaHero from '../Image/hero_kurta.jpg';
import fabric1 from '../Image/suit_2.jpg';
import fabric2 from '../Image/suit_5.jpg';
import fabric3 from '../Image/suit_6.jpg';
import fabric4 from '../Image/suit_7.jpg';
import fabric5 from '../Image/suit_8.jpg';
import fabric6 from '../Image/suit_9.jpg';

const FABRIC_BRANDS = [
  {
    id: 1,
    name: "Siyaram's",
    description: "India's leading manufacturer of premium suiting & shirting fabrics with over 45 years of excellence. Known for blended fashion fabrics, J. Hampstead, and Italian collaboration.",
    image: fabric1,
    specialties: ["Suiting", "Shirting", "Wool Blends", "Italian Collection"]
  },
  {
    id: 2,
    name: "D&J (Don & Julio)",
    description: "Premium Italian fabric brand offering exquisite suiting materials. Known for premium quality terry rayon's and luxury blends perfect for moderngentlemen.",
    image: fabric2,
    specialties: ["Terry Rayon", "T/R Fabrics", "Premium Suiting", "Luxury Blends"]
  },
  {
    id: 3,
    name: "EMEF",
    description: "Luxury Italian fabric brand specializing in premium suiting. A venture by Mitva Fabrics bringing international craftsmanship to India.",
    image: fabric3,
    specialties: ["Italian Luxury", "Premium Suiting", "Designer Fabrics", "T/R Collection"]
  },
  {
    id: 4,
    name: "Arvind",
    description: "Since 1931, Arvind is India's textile pioneer producing 140 million meters annually. Leading in denim, shirting, and premium suiting fabrics.",
    image: fabric4,
    specialties: ["Denim", "Cotton Shirting", "Premium Suits", "Sustainability"]
  },
  {
    id: 5,
    name: "Cadini",
    description: "Italian heritage brand from Florence (est. 1970). A joint venture with Siyaram bringing authentic Italian elegance to Indian market.",
    image: fabric5,
    specialties: ["100% Cotton", "Giza Cotton", "Linen", "Wool Cashmere"]
  },
  {
    id: 6,
    name: "Reid & Taylor",
    description: "Scottish heritage brand since 1830s, launched in India in 1998. Known for premium worsted suiting with Scottish craftsmanship.",
    image: fabric6,
    specialties: ["Worsted Suits", "Pure Wool", "Silk Blends", "Premium Shirting"]
  },
  {
    id: 7,
    name: "Raymond",
    description: "India's most trusted fabric brand with legacy spanning decades. Offers complete wardrobe solutions in suiting and shirting.",
    image: fabric1,
    specialties: ["Suiting", "Shirting", "Formal Wear", "Wool Blends"]
  },
  {
    id: 8,
    name: "T-R Fabrics",
    description: "Quality TR (Polyester Viscose) fabrics known for durability and premium finish. Perfect for everyday formal wear.",
    image: fabric2,
    specialties: ["TR Suiting", "Polyester Viscose", "Stretch Fabrics", "Durable"]
  },
  {
    id: 9,
    name: "SORT",
    description: "Premium shirting fabric brand from Sammaan with 40-year legacy. Known for comfort blends and contemporary designs.",
    image: fabric3,
    specialties: ["Shirting", "Cotton Blends", "Modern Designs", "Comfort"]
  },
  {
    id: 10,
    name: "Italian Fabrics",
    description: "Imported premium Italian fabrics for those who seek the finest. Direct sourcing from Italian mills for luxury collections.",
    image: fabric4,
    specialties: ["Imported", "Luxury", "Premium Wool", "Designer"]
  },
  {
    id: 11,
    name: "Traid",
    description: "Quality textile brand known for reliable fabrics. Offers a wide range of blends for diverse tailoring needs.",
    image: fabric5,
    specialties: ["Versatile", "Quality Assured", "Various Blends", "Reliable"]
  },
  {
    id: 12,
    name: "Kota Doria",
    description: "Traditional lightweight cotton-silk blend fabric from Kota, Rajasthan. Known for signature check patterns and translucent weave.",
    image: fabric6,
    specialties: ["Traditional", "Lightweight", "Cotton-Silk", "Handcrafted"]
  }
];

const FABRIC_COLLECTIONS = [
  {
    id: 1,
    name: "Premium Cotton",
    description: "Fine quality cotton fabrics perfect for everyday elegance and comfort.",
    images: [fabric1, fabric2, fabric3],
    features: ["Breathable", "Soft Feel", "Easy Maintenance"]
  },
  {
    id: 2,
    name: "Silk & Satin",
    description: "Luxurious silk fabrics for grand occasions and celebrations.",
    images: [fabric4, fabric5, fabric6],
    features: ["Rich Texture", "Elegant Shine", "Premium Quality"]
  },
  {
    id: 3,
    name: "Linen Collection",
    description: "Lightweight linen fabrics ideal for summer and formal wear.",
    images: [fabric1, fabric2, fabric3],
    features: ["Cool & Comfortable", "Natural Fibers", "Timeless Appeal"]
  },
  {
    id: 4,
    name: "Wool & Tweed",
    description: "Premium wool fabrics for winter and formal ensembles.",
    images: [fabric4, fabric5, fabric6],
    features: ["Warmth", "Durability", "Classic Style"]
  },
  {
    id: 5,
    name: "Embroidery Fabrics",
    description: "Intricately embroidered fabrics for wedding and festive wear.",
    images: [fabric1, fabric2, fabric3],
    features: ["Handwork", "Festive Look", "Exclusive"]
  },
  {
    id: 6,
    name: "Bandhani",
    description: "Traditional Bandhani fabrics from Rajasthan with unique tie-dye patterns.",
    images: [fabric4, fabric5, fabric6],
    features: ["Traditional", "Handcrafted", "Vibrant Colors"]
  },
  {
    id: 7,
    name: "Kota Doria",
    description: "Lightweight cotton-silk blend from Kota with distinctive checks.",
    images: [fabric1, fabric2, fabric3],
    features: ["Lightweight", "Translucent", "Traditional"]
  },
  {
    id: 8,
    name: "Chikankari",
    description: "Lucknow-style embroidered fabrics with delicate white threadwork.",
    images: [fabric4, fabric5, fabric6],
    features: ["Embroidery", "Elegant", "Traditional"]
  }
];

export default function Fabrics() {
  return (
    <>
    <SEO 
      title="Fabric Collections | Premium Fabrics - Siyaram, Arvind, Raymond & More"
      description="Explore our premium fabric collections from top brands like Siyaram, Arvind, Raymond, Cadini, EMEF, and Italian fabrics. Perfect for bespoke suits, sherwanis, and ethnic wear."
      keywords="premium fabrics, suiting fabric, shirting fabric, siyaram, arvind, raymond, italian fabric, wool, linen, cotton, tailor fabric, raipur"
    />
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${kurtaHero})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-3 sm:px-4"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 sm:mb-6 text-white">Fabric Collections</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">Premium Quality Fabrics</p>
          <p className="text-xs sm:text-sm md:text-lg italic text-gray-300 font-light tracking-wide">Sourced from the finest mills across India & globe</p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">Our Fabric Selection</h2>
            <p className="text-lg font-light leading-relaxed text-gray-600 max-w-3xl mx-auto">
              At Poshak Tailor & Ethnic Wear, we believe that great tailoring begins with exceptional fabric. 
              We source our fabrics from the most trusted mills and weavers, ensuring that every garment we 
              create is made from the finest quality materials.
            </p>
            <p className="text-lg font-light leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Whether you need cotton for daily wear, silk for weddings, or wool for formal occasions, 
              our extensive collection has something for every need and preference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Fabric Brands */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Premium Fabric Brands</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We source fabrics from the world's most trusted textile brands.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {FABRIC_BRANDS.map((brand, i) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden mb-4">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-center group-hover:text-gray-700">{brand.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Brand Details */}
          <div className="mt-20 space-y-16">
            {FABRIC_BRANDS.map((brand, i) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{brand.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{brand.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {brand.specialties.map((specialty, idx) => (
                      <span key={idx} className="text-xs font-bold uppercase tracking-widest bg-black text-white px-4 py-2">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}