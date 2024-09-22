'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import Google660FixedAdSense from './Google660FixedAdSense';
import Google800FixedAdSense from './Google800FixedAdSense';
import GoogleSmallAdSense from './GoogleSmallAdSense';

const NavGoogleAdSense = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  if (isSmallScreen) {
    return (
      <Box mx={2} my={3}>
        <GoogleSmallAdSense />
      </Box>
    );
  }

  if (isMediumScreen) {
    return (
      <Box mx={2} my={3}>
        <Google660FixedAdSense />
      </Box>
    );
  }

  return (
    <Box mx={2} my={3}>
      <Google800FixedAdSense />
    </Box>
  );
};

export default NavGoogleAdSense;
