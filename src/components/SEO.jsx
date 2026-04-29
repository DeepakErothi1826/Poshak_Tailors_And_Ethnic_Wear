import { useEffect } from 'react';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  schema,
  type = 'website'
}) {
  useEffect(() => {
    document.title = title ? `${title} | Poshak Tailors` : 'Poshak Tailors And Ethnic Wear - Premium Bespoke Tailoring in Raipur';
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || 'Premier bespoke tailoring and ethnic wear in Raipur, Chhattisgarh. Expert crafting of sherwanis, suits, kurtas, and wedding wear since 1995.';
    
    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || 'Poshak Tailors, ethnic wear, bespoke tailoring, sherwani, suit, kurta, wedding wear, Raipur, Chhattisgarh, menswear, tailor, Groom wear, wedding sherwani';
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url || 'https://poshaktailors.com/';
    
    // Robots
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'index, follow';
    
    // Open Graph - Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.property = 'og:title';
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title || 'Poshak Tailors And Ethnic Wear';
    
    // Open Graph - Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.property = 'og:description';
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description || 'Premier bespoke tailoring and ethnic wear in Raipur, Chhattisgarh. Expert crafting of sherwanis, suits, kurtas, and wedding wear.';
    
    // Open Graph - URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.property = 'og:url';
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = url || 'https://poshaktailors.com/';
    
    // Open Graph - Image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.property = 'og:image';
      document.head.appendChild(ogImage);
    }
    ogImage.content = image || 'https://poshaktailors.com/assets/hero1.png';
    
    // Open Graph - Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.property = 'og:type';
      document.head.appendChild(ogType);
    }
    ogType.content = type;
    
    // Open Graph - Site Name
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.property = 'og:site_name';
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.content = 'Poshak Tailors';
    
    // Twitter Card
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.name = 'twitter:card';
      document.head.appendChild(twitterCard);
    }
    twitterCard.content = 'summary_large_image';
    
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.name = 'twitter:title';
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.content = title || 'Poshak Tailors And Ethnic Wear';
    
    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.name = 'twitter:description';
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.content = description || 'Premier bespoke tailoring and ethnic wear in Raipur, Chhattisgarh.';
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.name = 'twitter:image';
      document.head.appendChild(twitterImage);
    }
    twitterImage.content = image || 'https://poshaktailors.com/assets/hero1.png';
    
    // Theme Color
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      document.head.appendChild(themeColor);
    }
    themeColor.content = '#000000';
    
    // JSON-LD Structured Data
    let existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poshak Tailors And Ethnic Wear",
      "description": "Premier bespoke tailoring and ethnic wear in Raipur, Chhattisgarh",
      "url": "https://poshaktailors.com/",
      "telephone": "+91-1234567890",
      "email": "info@poshaktailors.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Raipur",
        "addressRegion": "Chhattisgarh",
        "addressCountry": "IN"
      },
      "openingHours": "Mon-Sat 09:00-20:00",
      "priceRange": "₹₹₹",
      "image": "https://poshaktailors.com/assets/hero1.png",
      "sameAs": [
        "https://www.facebook.com/poshaktailors",
        "https://www.instagram.com/poshaktailors"
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema || defaultSchema);
    document.head.appendChild(script);

  }, [title, description, keywords, image, url, schema, type]);

  return null;
}