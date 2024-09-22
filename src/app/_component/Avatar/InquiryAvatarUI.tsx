import { Stack, Avatar } from '@mui/material';
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
      <Link href="https://open.kakao.com/me/burningfield" target="_blank">
        <Avatar
          alt="Remy Sharp"
          src="images/logo/kakao.png"
          variant="rounded"
          sx={{
            width: 36,
            height: 36,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.15)',
            },
          }}
        />
      </Link>

      <Link href="mailto:mapleburningfield@gmail.com" target="_blank">
        <Avatar
          alt="Travis Howard"
          src="images/logo/mail.png"
          variant="rounded"
          sx={{
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.15)',
            },
          }}
        />
      </Link>
    </Stack>
  );
};

export default InquiryAvatarUI;
