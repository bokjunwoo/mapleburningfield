'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any;
  }
}

const GoogleFixedAdSense = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'inline-block', maxWidth: '728px', height: '90px' }}
      data-ad-client="ca-pub-2888163582859915"
      data-ad-slot="3845728978"
    />
  );
};

export default GoogleFixedAdSense;
