import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Star } from 'lucide-react';
import SEO from '../components/SEO';
import blazerHero from '../Image/hero_blazer.jpg';
import poshakLogo from '../Image/logo.png';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Visit Our Store', details: ['Poshak Tailor & Ethnic Wear', 'Shop No.9, Surana Market', <a href="https://maps.google.com/?q=Shop+No.9,+Surana+Market,+Pandri,+Raipur,+Chhattisgarh+492001" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Pandri, Raipur, C.G. - 492001</a>] },
    { icon: Phone, title: 'Call Us', details: ['+91 98271 65995', '+91 98930 00970', '+91 95892 81400', '+91 70006 59096'] },
    { icon: Mail, title: 'Email Us', details: ['poshaktailor1995@gmail.com'] },
    { icon: Clock, title: 'Store Hours', details: ['Mon - Sat: 12:00 PM - 9:45 PM', 'Sunday: 12:00 PM - 4:00 PM'] },
  ];

  return (
    <>
      <SEO 
        title="Contact Us | Poshak Tailors And Ethnic Wear - Get in Touch"
        description="Contact Poshak Tailors And Ethnic Wear in Raipur. Visit our showroom or call us for bespoke tailoring services. We're available Mon-Sat 10 AM to 8 PM."
        keywords="contact poshak tailors, tailor near me, bespoke tailoring contact, raipur tailor shop, appointment booking"
      />
      <div className="w-full bg-white text-black min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${blazerHero})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)" />
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-white/80 mb-4 md:mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-4 md:mb-6">
              Contact Us
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Have questions about our bespoke collections? We'd love to hear from you.
            </p>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Director Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white">
                <Star className="w-4 h-4 fill-white" />
                <span className="text-sm font-bold uppercase tracking-widest">Directed by Gyaneshwar Udasi</span>
                <Star className="w-4 h-4 fill-white" />
              </div>
            </div>

            {/* Section Header */}
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4 md:mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Whether you're looking for bespoke tailoring or have questions about our collections, 
                our team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Contact Info Cards */}
              <div className="lg:col-span-5 space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-4 md:p-6 bg-gray-50 hover:bg-black hover:text-white transition-all duration-500 rounded-none"
                  >
                    <div className="p-2 md:p-3 bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-500 flex-shrink-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase tracking-wider text-sm md:text-base mb-1 md:mb-2">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-500 group-hover:text-gray-400 text-sm md:text-base leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name *"
                        className="w-full px-4 py-4 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address *"
                        className="w-full px-4 py-4 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number *"
                      className="w-full px-4 py-4 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      placeholder="Tell us about your requirements..."
                      rows={6}
                      className="w-full px-4 py-4 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors bg-transparent resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-black text-white py-4 md:py-5 uppercase text-sm font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-gray-800 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {submitted && (
                    <div className="flex items-center gap-2 text-green-600 font-medium">
                      <CheckCircle className="w-5 h-5" />
                      <span>Thank you! We'll get back to you soon.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Visit Our Store</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We invite you to experience the art of bespoke tailoring at our showroom.
              </p>
              <a 
                href="https://maps.google.com/?q=Shop+No.9,+Surana+Market,+Pandri,+Raipur,+Chhattisgarh+492001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-black text-white px-6 py-3 uppercase text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors"
              >
                Open in Maps
              </a>
            </div>
            <div className="aspect-video md:aspect-[2/1] bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5429645229643!2d81.64259837599026!3d21.249964080112462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda565a0c8b3%3A0xeab5add7ba8ff8da!2zUGFuZHJpLCBSYWlwdXIsIENoaGF0dGlzZ2FyaA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen="allowfullscreen"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-24 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Ready to Elevate Your Style?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Book your consultation today and discover the art of true bespoke tailoring.
            </p>
            <a 
              href="/products" 
              className="inline-block px-8 md:px-10 py-4 md:py-5 bg-white text-black uppercase text-sm font-bold tracking-widest hover:bg-gray-200 transition-colors duration-300"
            >
              Explore Collections
            </a>
          </div>
        </section>
      </div>
    </>
  );
}