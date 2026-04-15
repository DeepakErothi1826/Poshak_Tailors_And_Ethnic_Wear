import { motion } from 'framer-motion';
import hero1Img from '../Image/hero1.png';
import aboutImg1 from '../Image/download (7).jpg';
import aboutImg2 from '../Image/download (6).jpg';
import aboutImg3 from '../Image/download (5).jpg';
import aboutImg4 from '../Image/download (4).jpg';
import aboutImg5 from '../Image/download (3).jpg';
import aboutImg6 from '../Image/download (2).jpg';

export default function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] w-full pt-24 bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero1Img})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-balance">The Heritage</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-300">EST. 1993</p>
        </div>
      </section>

      {/* Story Narrative */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl font-black uppercase tracking-tighter">A Legacy of Tailoring</h2>
          <p className="text-lg font-light leading-relaxed text-gray-600">
            Poshak Tailors And Ethnic Wear represents thirty years of uncompromising quality and craftsmanship. What started as a modest atelier in Raipur's bustling textile markets has evolved into a premier destination for bespoke menswear and elite ethnic fashion.
          </p>
          <p className="text-lg font-light leading-relaxed text-gray-600">
            For decades, our artisans have passed down their meticulous skills, threading needles through time to create garments that do more than just fit perfectly—they tell a story. Every suit, every sherwani is a testament to our dedication to the art of the perfect drape.
          </p>
        </motion.div>
      </section>

      {/* Image Block */}
      <section className="w-full h-[60vh] overflow-hidden">
        <img 
          src={aboutImg1}
          alt="Tailoring Masterclass" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Our Philosophy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that clothing is an extension of one's persona. Our approach is deeply collaborative, ensuring that each client's individual style is translated through our traditional expertise and contemporary sensibilities.
              </p>
              <ul className="space-y-4">
                {[
                  "Premium Fabrics Sourced Globally",
                  "Master Artisans with Decades of Experience",
                  "Unparalleled Attention to Detail",
                  "A Commitment to Timeless Elegance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 bg-black rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="aspect-square bg-gray-200 overflow-hidden"
            >
              <img src={aboutImg2} alt="Fabric details" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">What We Do</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From bespoke tailoring to ethnic wear, we craft excellence in every stitch.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Bespoke Suits", desc: "Handcrafted suits tailored to your exact measurements, ensuring the perfect fit and silhouette that reflects your personal style.", icon: "✂️" },
              { title: "Ethnic Wear", desc: "Exquisite sherwanis, kurtas, and pathani suits crafted with traditional techniques and modern aesthetics for every occasion.", icon: "👑" },
              { title: "Wedding Collection", desc: "Our bridal and groom collection features meticulously designed outfits for your special day, making you look regal and elegant.", icon: "💍" },
              { title: "Alterations & Repairs", desc: "Expert tailoring services to breathe new life into your existing garments, ensuring they fit perfectly and look refreshed.", icon: "🧵" },
              { title: "Custom Design", desc: "Bring your vision to life with our custom design service, where we create unique pieces tailored to your specific preferences.", icon: "🎨" },
              { title: "Corporate Tailoring", desc: "Professional attire for businesses and organizations, providing polished uniforms that represent your brand with pride.", icon: "🏢" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 border border-gray-200 hover:border-black transition-colors group"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-black uppercase tracking-wider mb-4 group-hover:text-gray-700">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Artisans */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Master Artisans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The skilled hands behind every masterpiece.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Master Tailor", exp: "25 Years Experience" },
              { name: "Mohammad Ashraf", role: "Sherwani Specialist", exp: "20 Years Experience" },
              { name: "Vikram Singh", role: "Bespoke Expert", exp: "18 Years Experience" },
              { name: "Pankaj Jain", role: "Pattern Master", exp: "22 Years Experience" }
            ].map((artisan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="aspect-[3/4] bg-gray-800 mb-6 overflow-hidden">
                  <img src={[aboutImg3, aboutImg4, aboutImg5, aboutImg6][i]} alt={artisan.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider">{artisan.name}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">{artisan.role}</p>
                <p className="text-gray-500 text-xs mt-2">{artisan.exp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "30+", label: "Years of Excellence" },
              { number: "50,000+", label: "Happy Clients" },
              { number: "100+", label: "Master Artisans" },
              { number: "500+", label: "Annual Weddings" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">{stat.number}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Visit Our Atelier</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the art of bespoke tailoring at our Raipur showroom. Book your consultation today and let us craft your perfect ensemble.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="/contact" className="bg-black text-white px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors">
                Book Appointment
              </a>
              <a href="/products" className="border-2 border-black text-black px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-colors">
                View Collection
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Find Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Showroom Address</h3>
                  <p className="text-gray-400">
                    Back of City Center Mall,<br />
                    Next to Little Finger,<br />
                    Pandri, Raipur,<br />
                    Chhattisgarh 492001
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Contact</h3>
                  <p className="text-gray-400">
                    Phone: 098271 65995<br />
                    Email: info@poshaktailors.com
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Hours</h3>
                  <p className="text-gray-400">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-800 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5429645229643!2d81.64259837599026!3d21.249964080112462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda565a0c8b3%3A0xeab5add7ba8ff8da!2zUGFuZHJpLCBSYWlwdXIsIENoaGF0dGlzZ2FyaA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}