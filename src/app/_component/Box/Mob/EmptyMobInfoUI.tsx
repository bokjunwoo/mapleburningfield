import { Box } from '@mui/material';
import Image from 'next/image';

const EmptyMobInfoUI = () => {
  return (
    <Box
      width="100%"
      height={343.17}
      bgcolor="#2b2b2b"
      p={2}
      borderRadius={2}
      border="thick double white"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Image
          src="/images/maple.png"
          alt="none_image"
          width={50}
          height={45}
        />
      </Box>
    </Box>
  );
};

export default EmptyMobInfoUI;
