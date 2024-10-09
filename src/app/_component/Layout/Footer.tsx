import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import Link from 'next/link';
import InquiryAvatarUI from '../Avatar/InquiryAvatarUI';

const Footer = () => {
  return (
    <Box width="100%" height="100%">
      <Box
        component="footer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor={grey[300]}
        color={grey[800]}
        py={3}
      >
        <Box px={2} display="flex" flexDirection="column" alignItems="center">
          <InquiryAvatarUI />

          <Typography variant="body2" color="inherit" mb={3} fontSize={13}>
            오류제보 | 개선사항 | 문의사항 | mapleburningfield@gmail.com
          </Typography>

          <Box display="flex" alignItems="center" mb={0.5}>
            <Typography
              variant="body2"
              color="inherit"
              component="p"
              mr={0.5}
              fontSize={13}
            >
              With.
            </Typography>
            <Link
              href="https://partners.maplestory.nexon.com/developers"
              target="_blank"
              style={{ height: 15 }}
            >
              <Image
                src="/images/partners_maplestory.png"
                width={215}
                height={15}
                alt="partners_maplestory"
                style={{ alignSelf: 'flex-end' }}
              />
            </Link>
          </Box>

          <Box display="flex" alignItems="center" mb={0.5}>
            <Typography
              variant="body2"
              color="inherit"
              component="p"
              mr={0.5}
              fontSize={13}
            >
              Data based on
            </Typography>
            <Link href="https://openapi.nexon.com/ko/" target="_blank">
              <Image
                src="/images/nexon_open_api.svg"
                width={180}
                height={11}
                alt="nexon_open_api"
              />
            </Link>
          </Box>

          <Typography
            variant="body2"
            color="inherit"
            component="p"
            fontSize={13}
            mb={0.5}
          >
            This site is not associated with NEXON Korea.
          </Typography>

          <Typography
            variant="body2"
            color="inherit"
            component="p"
            fontSize={13}
          >
            &copy; 2024 버닝필드. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
