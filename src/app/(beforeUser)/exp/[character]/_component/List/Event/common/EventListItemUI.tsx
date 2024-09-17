import { ListItem } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  children: React.ReactNode;
};

const EventListItemUI = ({ children }: Props) => {
  return (
    <ListItem
      disablePadding
      alignItems="center"
      sx={{
        border: `1px solid ${grey[400]}`,
        borderRadius: 1,
        mt: 0.5,
        bgcolor: grey[200],
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </ListItem>
  );
};

export default EventListItemUI;
