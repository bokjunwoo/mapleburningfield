'use client';

import { Box } from '@mui/material';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any;
  }
}

const Google350FixedAdSense = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <ins
        className="adsbygoogle"
        style={{
          display: 'inline-block',
          width: '350px',
          height: '90px',
        }}
        data-ad-client="ca-pub-2888163582859915"
        data-ad-slot="7688771069"
      />
    </Box>
  );
};

export default Google350FixedAdSense;