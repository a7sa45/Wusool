'use client';

import React from 'react';
import { Container, BodyText, SmallText } from '@/components/ui';
import { useLayout } from '@/components/Layout';

export function FooterSection() {
  const { t, locale } = useLayout();

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/966598330936',
      icon: '📱',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/wusool.sa',
      icon: '📷',
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@wusool.sa',
      icon: '🎵',
    },
    {
      name: 'Google Maps',
      url: 'https://maps.google.com/?q=Abha,Saudi+Arabia',
      icon: '🗺️',
    },
  ];

  return (
    <footer className="bg-gray-900 py-8 sm:py-12">
      <Container size="md">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-2xl sm:text-3xl font-bold text-primary-gold mb-3 sm:mb-4">
            وصول
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-6 sm:mb-8">
          <BodyText 
            locale={locale} 
            color="muted" 
            align="center"
            className="mb-3 sm:mb-4 px-2"
          >
            {t.footer.contact}
          </BodyText>
        </div>

        {/* Social Links */}
        <div className="text-center mb-6 sm:mb-8">
          <BodyText 
            locale={locale} 
            color="muted" 
            align="center"
            className="mb-3 sm:mb-4"
          >
            {t.footer.followUs}
          </BodyText>
          
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-text-light/80 hover:text-primary-gold transition-colors duration-200 px-2 py-1"
                aria-label={link.name}
              >
                <span className="text-lg sm:text-xl">{link.icon}</span>
                <SmallText locale={locale}>
                  {link.name}
                </SmallText>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-800">
          <SmallText 
            locale={locale} 
            color="muted" 
            align="center"
            className="px-2"
          >
            {t.footer.copyright}
          </SmallText>
        </div>
      </Container>
    </footer>
  );
}