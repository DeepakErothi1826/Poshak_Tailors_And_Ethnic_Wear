import { useEffect } from 'react';

const BASE_URL = 'https://deepakerothi1826.github.io/Poshak_Tailors_And_Ethnic_Wear/';

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
    const currentUrl = url || `${BASE_URL}`;
    
    document.title = title ? `${title} | Poshak Tailors` : 'Poshak Tailors And Ethnic Wear - Premium Bespoke Tailoring in Raipur, Chhattisgarh';
    
    const metaTags = [
      { name: 'description', content: description || 'Premier bespoke tailoring and ethnic wear in Raipur, Chhattisgarh since 1993. Expert crafting of sherwanis, suits, kurtas, blazers, and wedding wear.' },
      { name: 'keywords', content: keywords || 'Poshak Tailors, ethnic wear, bespoke tailoring, sherwani, suit, kurta, wedding wear, Raipur, Chhattisgarh, menswear, party wear, formal suits, Indo-Western, Jodhpuri, Bandhgala, blazer, pathani, Modi jacket' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: 'Poshak Tailors And Ethnic Wear' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'geo.region', content: 'IN-CT' },
      { name: 'geo.placename', content: 'Raipur, Chhattisgarh, India' },
      { name: 'geo.position', content: '21.249964;81.642598' },
      { name: 'ICBM', content: '21.249964, 81.642598' },
      { name: 'theme-color', content: '#000000' },
      { name: 'format-detection', content: 'telephone=yes' },
      { property: 'og:type', content: type },
      { property: 'og:url', content: currentUrl },
      { property: 'og:title', content: title || 'Poshak Tailors And Ethnic Wear - Premium Bespoke Tailoring' },
      { property: 'og:description', content: description || 'Premier bespoke tailoring and ethnic wear in Raipur, Chhattisgarh.' },
      { property: 'og:image', content: image || `${BASE_URL}logo.png` },
      { property: 'og:image:width', content: '512' },
      { property: 'og:image:height', content: '512' },
      { property: 'og:site_name', content: 'Poshak Tailors And Ethnic Wear' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:see_also', content: 'https://www.facebook.com/people/Poshak-tailor/100064060421507/' },
      { property: 'og:see_also', content: 'https://www.instagram.com/poshak_tailor' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: currentUrl },
      { name: 'twitter:title', content: title || 'Poshak Tailors And Ethnic Wear - Premium Bespoke Tailoring' },
      { name: 'twitter:description', content: description || 'Premier bespoke tailoring and ethnic wear in Raipur, Chhattisgarh.' },
      { name: 'twitter:image', content: image || `${BASE_URL}logo.png` },
      { name: 'twitter:creator', content: '@poshaktailors' },
      { name: 'twitter:site', content: '@poshaktailors' }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.name = name;
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    const defaultSchemas = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Poshak Tailors And Ethnic Wear",
        "alternateName": "Poshak Tailors",
        "url": BASE_URL,
        "logo": `${BASE_URL}logo.png`,
        "description": "Premier bespoke tailoring and ethnic wear in Raipur, Chhattisgarh since 1993.",
        "foundingDate": "1993",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9827165995",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
          "https://www.facebook.com/people/Poshak-tailor/100064060421507/",
          "https://www.instagram.com/poshak_tailor"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Poshak Tailors And Ethnic Wear",
        "image": `${BASE_URL}logo.png`,
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop No.9, Surana Market, Behind City Center Mall, Pandri",
          "addressLocality": "Raipur",
          "addressRegion": "Chhattisgarh",
          "postalCode": "492001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 21.249964080112462,
          "longitude": 81.64259837599026
        },
        "telephone": "+919827165995",
        "email": "gyaneshwarudasi@gmail.com",
        "openingHours": "Mo-Sa 10:00-20:00",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Poshak Tailors And Ethnic Wear",
        "url": BASE_URL,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${BASE_URL}products?search={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ];

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    defaultSchemas.forEach(schemaData => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    });

    if (schema) {
      const customSchema = document.createElement('script');
      customSchema.type = 'application/ld+json';
      customSchema.textContent = JSON.stringify(schema);
      document.head.appendChild(customSchema);
    }

  }, [title, description, keywords, image, url, schema, type]);

  return null;
}