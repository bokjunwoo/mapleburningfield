import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import Link from 'next/link';
import InquiryAvatarUI from '../Avatar/InquiryAvatarUI';

const Footer = () => {
  return (
    <Box
      component="footer"
      height="25vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={grey[300]}
      color={grey[800]}
      mt={3}
    >
      <Box px={2} display="flex" flexDirection="column" alignItems="center">
        <InquiryAvatarUI />
        <Typography variant="body2" color="inherit" mb={3}>
          오류제보 | 개선사항 | 문의사항 | mapleburningfield@gmail.com
        </Typography>
        <Typography variant="body2" color="inherit" component="p" mb={0.5}>
          &copy; 2024 버닝필드. All rights reserved.
        </Typography>
        <Box display="flex" alignItems="center" mb={0.5}>
          <Typography variant="body2" color="inherit" component="p" mr={0.5}>
            Data based on
          </Typography>
          <Link href="https://openapi.nexon.com/ko/" target="_blank">
            <Image
              src="/images/nexon_open_api.svg"
              width={215}
              height={13}
              alt="nexon_open_api"
            />
          </Link>
        </Box>

        <Typography variant="body2" color="inherit" component="p">
          This site is not associated with NEXON Korea.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
