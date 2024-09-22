import { Box, Divider, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import FAQAccordion from './_component/Accordion/FAQAccordion';
import HistoryAccordion from './_component/Accordion/HistoryAccordion';
import FooterGoogleAdSense from '@/app/_component/Google/FooterGoogleAdSense';
import NavGoogleAdSense from '@/app/_component/Google/NavGoogleAdSense';

export const metadata = {
  metadataBase: new URL('https://mapleburningfield.com/'),
  title: 'FAQ/소식 | 버닝필드',
  description: 'FAQ',
  openGraph: {
    title: 'FAQ/소식 | 버닝필드',
    description: 'FAQ',
    images: '/images/og_image.png',
  },
};

const NewsPage = () => {
  return (
    <Box>
      <NavGoogleAdSense />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography mt={3} variant="h5">
            업데이트 내역
          </Typography>

          <Divider sx={{ my: 2, borderWidth: 2, bgcolor: grey[600] }} />

          <HistoryAccordion />
        </Grid>

        <Grid item xs={12}>
          <Typography mt={3} variant="h5">
            자주 묻는 질문
          </Typography>

          <Divider sx={{ my: 2, borderWidth: 2, bgcolor: grey[600] }} />

          <FAQAccordion />
        </Grid>
      </Grid>

      <FooterGoogleAdSense />
    </Box>
  );
};

export default NewsPage;
