import { Box, Container, Typography } from '@mui/material';
import MainSearchFormUI from '../_component/Form/UI/MainSearchFormUI';
import FooterGoogleAdSense from '../_component/Google/FooterGoogleAdSense';

const HomePage = () => {
  return (
    <Box component="main" width="100%" height="100%">
      <Box
        width="100%"
        height="85vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage: 'url(/images/landing.png)',
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
          <Container maxWidth="xl">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="h1"
                color="white"
                fontSize={48}
                fontWeight="bold"
                letterSpacing={10}
                marginBottom={3}
              >
                버닝필드
              </Typography>
              <Typography variant="body1" color="white" marginBottom={3}>
                메이플스토리 사냥터 정보 서비스
              </Typography>

              <Box mb={3}>
                <MainSearchFormUI pathName="character" />
              </Box>

              <Box>
                <Typography variant="body2" fontSize={12} mb={1} color="white">
                  ❖ 200레벨 이상, 5차전직이 완료된 캐틱터만 이용가능합니다.
                </Typography>
                <Typography variant="body2" fontSize={12} mb={1} color="white">
                  ❖ 2023년 12월 21일 점검 이후 접속한 캐릭터만 조회가
                  가능합니다.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <FooterGoogleAdSense />
    </Box>
  );
};

export default HomePage;
