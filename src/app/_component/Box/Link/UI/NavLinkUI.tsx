import {
  Avatar,
  Box,
  SnackbarCloseReason,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import SnackbarUI from '@/app/_component/Alret/SnackbarUI';
import theme from '@/app/theme';

type Props = {
  pathname: string;
  value: string;
  text: string;
  handleClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  openSnackbar: boolean;
  handleClose: (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => void;
};

const NavLinkUI = ({
  pathname,
  value,
  text,
  handleClick,
  openSnackbar,
  handleClose,
}: Props) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Link href={value} onClick={handleClick}>
      <Box
        py={2}
        pr={isSmallScreen ? 1.3 : 2}
        pl={text === '메인' ? 1 : 2}
        color={pathname === value ? grey[50] : grey[400]}
        display="inline-block"
        position="relative"
      >
        {text === '사냥정보' && (
          <Avatar
            src="/images/state/hot.png"
            alt="icon"
            variant="square"
            sx={{
              width: 27,
              height: 16,
              position: 'absolute',
              top: 4,
              left: 0,
              p: 0,
              m: 0,
            }}
          />
        )}

        {text === '메할일' && (
          <Avatar
            src="/images/state/new.png"
            alt="icon"
            variant="square"
            sx={{
              width: 27,
              height: 16,
              position: 'absolute',
              top: 4,
              left: 0,
              p: 0,
              m: 0,
            }}
          />
        )}

        <Typography
          component="span"
          variant="body2"
          pb={1}
          borderBottom={pathname === value ? `2px solid ${grey[50]}` : 'none'}
          sx={{
            '&:hover': {
              color: grey[50],
            },
          }}
        >
          {text}
        </Typography>
      </Box>

      <SnackbarUI openSnackbar={openSnackbar} handleClose={handleClose} />
    </Link>
  );
};

export default NavLinkUI;
