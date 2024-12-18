import { Stack, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const InquiryAvatarUI = () => {
  return (
    <Stack
      direction="row"
      spacing={5}
      display="flex"
      alignItems="center"
      mb={1}
    >
      <Box
        sx={{
          display: 'inline-block',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.15)',
          },
        }}
      >
        <Link href="https://open.kakao.com/me/burningfield" target="_blank">
          <Image
            alt="Kakao"
            src="/images/logo/kakao.png"
            width={36}
            height={36}
            style={{
              borderRadius: '8px',
              transition: 'transform 0.3s ease',
            }}
            className="image-hover-effect"
          />
        </Link>
      </Box>

      <Box
        sx={{
          display: 'inline-block',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.15)',
          },
        }}
      >
        <Link href="mailto:mapleburningfield@gmail.com" target="_blank">
          <Image
            alt="Email"
            src="/images/logo/mail.png"
            width={36}
            height={36}
            style={{
              borderRadius: '8px',
            }}
          />
        </Link>
      </Box>
    </Stack>
  );
};

export default InquiryAvatarUI;
