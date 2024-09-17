import { CardContent } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const PlaceCardContentUI = ({ children }: Props) => {
  return (
    <CardContent
      sx={{
        bgcolor: 'white',
        borderRadius: 1,
        '&.MuiCardContent-root:last-child': { pb: 2 },
      }}
    >
      {children}
    </CardContent>
  );
};

export default PlaceCardContentUI;
