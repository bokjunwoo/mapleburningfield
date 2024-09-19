'use client';

import { Box, Card, Typography, Alert } from '@mui/material';
import { useRecoilValue } from 'recoil';
import MainSearchFormUI from '../_component/Form/UI/MainSearchFormUI';
import { errorMessageState } from '../atoms/errorMessageState';

type Props = {
  title?: string;
};

const ErrorPage = ({ title }: Props) => {
  const errorMessage = useRecoilValue(errorMessageState);

  const pathName = title === '메할일' ? 'exp' : 'character';

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80vw',
          height: '50vh',
          backgroundImage: 'url(/images/input.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          bgcolor="rgba(0, 0, 0, 0.4)"
          width="100%"
          height="100vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {errorMessage !== '' ? (
            <Alert
              severity="error"
              sx={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& .MuiAlert-icon': {
                  m: '0',
                  mr: 1,
                  display: 'flex',
                  alignItems: 'center',
                },
                '& .MuiAlert-message': {},
              }}
            >
              {errorMessage}
            </Alert>
          ) : null}

          <Typography variant="h4" my={3} fontWeight={700} color="white">
            {title ? `${title} - 캐릭터 검색` : '캐릭터 검색'}
          </Typography>

          <MainSearchFormUI pathName={pathName} />

          <Box mt={3}>
            <Typography variant="body2" fontSize={12} mb={1} color="white">
              ❖ 200레벨 이상, 5차전직이 완료된 캐틱터만 이용가능합니다.
            </Typography>
            <Typography variant="body2" fontSize={12} mb={1} color="white">
              ❖ 2023년 12월 21일 점검 이후 접속한 캐릭터만 조회가 가능합니다.
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ErrorPage;
