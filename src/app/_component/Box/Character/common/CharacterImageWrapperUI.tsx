import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const CharacterImageWrapperUI = ({ children }: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: 'url(/images/landing.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        p: 0,
        borderRadius: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default CharacterImageWrapperUI;
