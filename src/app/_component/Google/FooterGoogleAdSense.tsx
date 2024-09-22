'use client';

import { Container } from '@mui/material';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any;
  }
}

const FooterGoogleAdSense = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2888163582859915"
        data-ad-slot="2469892538"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </Container>
  );
};

export default FooterGoogleAdSense;
