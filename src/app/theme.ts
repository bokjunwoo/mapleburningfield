'use client';

import { createTheme } from '@mui/material/styles';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  typography: {
    fontFamily: notoSansKR.style.fontFamily,
    fontWeightMedium: 400,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 710,
      md: 980,
      lg: 1040,
      xl: 1152,
    },
  },
  palette: {
    text: {
      primary: '#000000',
    },
  },
});

export default theme;
