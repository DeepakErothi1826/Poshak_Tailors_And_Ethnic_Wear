import { useEffect } from 'react';

const BASE_URL = 'https://deepakerothi1826.github.io/Poshak_Tailors_And_Ethnic_Wear/';
const SITE_NAME = 'Poshak Tailors And Ethnic Wear';

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
    
    document.title = title || `${SITE_NAME} | Best Bespoke Suits & Ethnic Wear`;
    
    const pageTitle = title || `${SITE_NAME} | Best Bespoke Suits & Ethnic Wear`;
    const pageDescription = description || 'Expert crafting of sherwanis, suits, kurtas, wedding wear, blazers, and bespoke tailoring since 1995. We do not just sew fabrics; we sculpt them to your silhouette.';
    const defaultKeywords = 'Poshak Tailors, ethnic wear, bespoke tailoring, sherwani, suit, kurta, wedding wear, Raipur, Chhattisgarh, menswear, party wear, formal suits, Indo-Western, Jodhpuri, Bandhgala, blazer, pathani, Modi jacket';

    const metaTags = [
      { name: 'description', content: pageDescription },
      { name: 'keywords', content: keywords || defaultKeywords },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: SITE_NAME },
      { name: 'application-name', content: SITE_NAME },
      { name: 'apple-mobile-web-app-title', content: SITE_NAME },
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
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: image || `${BASE_URL}logo.png` },
      { property: 'og:image:width', content: '512' },
      { property: 'og:image:height', content: '512' },
      { property: 'og:image:alt', content: `${SITE_NAME} Logo` },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:see_also', content: 'https://www.facebook.com/people/Poshak-tailor/100064060421507/' },
      { property: 'og:see_also', content: 'https://www.instagram.com/poshak_tailor' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: currentUrl },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: image || `${BASE_URL}logo.png` },
      { name: 'twitter:image:alt', content: `${SITE_NAME} Logo` },
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
        "name": SITE_NAME,
        "alternateName": "Poshak Tailors",
        "url": BASE_URL,
        "logo": `${BASE_URL}logo.png`,
        "description": "Expert crafting of sherwanis, suits, kurtas, wedding wear, blazers, and bespoke tailoring since 1995.",
        "foundingDate": "1995",
        "slogan": "God Makes Man, We Make Gentleman",
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
        "name": SITE_NAME,
        "@id": BASE_URL,
        "image": `${BASE_URL}logo.png`,
        "url": BASE_URL,
        "priceRange": "₹₹₹",
        "telephone": "+919827165995",
        "email": "gyaneshwarudasi@gmail.com",
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
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "12:00",
            "closes": "16:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500+",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": SITE_NAME,
        "alternateName": "Poshak Tailors",
        "url": BASE_URL,
        "description": "Expert crafting of sherwanis, suits, kurtas, wedding wear, blazers, and bespoke tailoring since 1995.",
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${BASE_URL}products?search={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      }
    ];

    const seoScriptId = 'seo-schema';
    const existingScript = document.getElementById(seoScriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const combinedSchema = [...defaultSchemas];
    if (schema) {
      combinedSchema.push(schema);
    }

    const containerScript = document.createElement('script');
    containerScript.id = seoScriptId;
    containerScript.type = 'application/ld+json';
    containerScript.textContent = JSON.stringify(combinedSchema);
    document.head.appendChild(containerScript);

  }, [title, description, keywords, image, url, schema, type]);

  return null;
}