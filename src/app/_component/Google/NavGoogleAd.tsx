import { Box, useMediaQuery, useTheme } from '@mui/material';
import Google350FixedAdSense from './Google350FixedAdSense';
import Google660FixedAdSense from './Google660FixedAdSense';
import Google800FixedAdSense from './Google800FixedAdSense';

const NavGoogleAd = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  if (isSmallScreen) {
    return (
      <Box mx={2} my={3}>
        <Google350FixedAdSense />
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

export default NavGoogleAd;
