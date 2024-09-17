import { Tab } from '@mui/material';
import { grey } from '@mui/material/colors';

const NavTabUI = ({ ...props }) => {
  return (
    <Tab
      {...props}
      disableRipple
      sx={{
        color: grey[400],
        fontSize: 14,
        minWidth: 0,
        '&.Mui-selected': {
          color: grey[100],
        },
        '&:hover': {
          color: grey[100],
          opacity: 1,
        },
      }}
    />
  );
};

export default NavTabUI;
