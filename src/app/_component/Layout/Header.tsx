import {
  AppBar,
  Avatar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import HeaderSearchFormUI from '../Form/UI/HeaderSearchFormUI';

const Header = () => {
  return (
    <Box bgcolor={grey[900]}>
      <Container maxWidth="xl">
        <AppBar
          position="static"
          sx={{
            bgcolor: 'inherit',
            boxShadow: 'none',
            '& .MuiToolbar-root': {
              p: 0,
            },
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box component="a" href="/" display="inherit" alignItems="center">
              <Avatar
                alt="Remy Sharp"
                src="/images/logo.png"
                variant="rounded"
                sx={{ width: 32, height: 32, mr: 0.5 }}
              />
              <Typography variant="h6" color="white" fontWeight="bold">
                버닝필드
              </Typography>
            </Box>

            <HeaderSearchFormUI pathName="character" />
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default Header;
