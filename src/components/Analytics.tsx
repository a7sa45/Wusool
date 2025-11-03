'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGA, trackPageView, GA_TRACKING_ID } from '@/lib/analytics';

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Google Analytics on mount
    if (GA_TRACKING_ID) {
      initGA();
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (GA_TRACKING_ID && pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  // Don't render anything if no tracking ID
  if (!GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}