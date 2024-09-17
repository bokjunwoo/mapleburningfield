import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {
  characterName: string;
};

const LoadingPage = ({ characterName }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="80vh"
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '70vw',
          p: 5,
        }}
      >
        <Image
          src="/images/state/loading.gif"
          alt="로딩이미지"
          width={97}
          height={139}
        />
        <Typography mt={3}>
          캐릭터 ( {characterName} ) 정보를 로딩 중입니다
        </Typography>
      </Card>
    </Box>
  );
};

export default LoadingPage;
