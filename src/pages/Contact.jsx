import { motion } from 'framer-motion';
import { MapPin, Phone, Star, Send } from 'lucide-react';
import blazerHero from '../Image/Blazer_Hero.jpg';

export default function Contact() {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero */}
      <section className="relative h-[40vh] w-full pt-24 bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${blazerHero})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Contact Us</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Get in Touch</p>
        </div>
      </section>

      <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Get in Touch</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Visit our atelier or reach out for bespoke appointments and inquiries. We are dedicated to providing the perfect fit.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold uppercase tracking-wider mb-2">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    Back of City Center Mall, next to little finger, <br />
                    Pandri, Raipur, <br />
                    Chhattisgarh 492001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold uppercase tracking-wider mb-2">Direct Contact</h3>
                  <p className="text-gray-600">098271 65995</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 mt-1 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold uppercase tracking-wider mb-2">Client Satisfaction</h3>
                  <p className="text-gray-600">Consistently rated 5.0-stars by our esteemed clientele.</p>
                </div>
              </div>
            </div>

            {/* Aesthetic Map Placeholder / Embed */}
            <div className="w-full h-80 bg-gray-200 overflow-hidden relative grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5429645229643!2d81.64259837599026!3d21.249964080112462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda565a0c8b3%3A0xeab5add7ba8ff8da!2zUGFuZHJpLCBSYWlwdXIsIENoaGF0dGlzZ2FyaA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors rounded-none"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors rounded-none"
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors resize-none rounded-none"
                  required 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-black text-white py-4 uppercase text-sm font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mt-8"
              >
                Send Request <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
