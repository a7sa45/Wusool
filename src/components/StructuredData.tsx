'use client';

import React from 'react';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "وصول - Wusool",
    "description": "خدمات النقل الخاص والسائقين المحترفين في أبها والمناطق السياحية",
    "url": "https://wusool.sa",
    "telephone": "+966598330936",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "أبها",
      "addressRegion": "عسير",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.2164",
      "longitude": "42.5053"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "150-500 SAR",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "18.2164",
        "longitude": "42.5053"
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات النقل",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "سائق خاص ليوم كامل",
            "description": "سيارة عائلية وسائق محترف لمدة 8 ساعات"
          },
          "price": "500",
          "priceCurrency": "SAR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "توصيلة المطار",
            "description": "نقل مريح من وإلى مطار أبها"
          },
          "price": "150",
          "priceCurrency": "SAR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تنقل داخل المدينة",
            "description": "جولة قصيرة داخل المدينة لزيارة الأماكن السياحية"
          },
          "price": "300",
          "priceCurrency": "SAR"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "30"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966598330936",
      "contactType": "customer service",
      "availableLanguage": ["Arabic", "English"]
    },
    "sameAs": [
      "https://wa.me/966598330936",
      "https://instagram.com/wusool.sa",
      "https://tiktok.com/@wusool.sa"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}