import { ListItem, ListItemButton } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';

type Props = {
  children: React.ReactNode;
  isCheck: boolean;
  isObtainable?: boolean;
  warning?: boolean;
};

const ExpListItemUI = ({
  children,
  isCheck,
  isObtainable = true,
  warning = false,
}: Props) => {
  return (
    <ListItem
      disablePadding
      alignItems={warning ? 'flex-start' : 'center'}
      sx={{
        border: `1px solid ${grey[400]}`,
        borderRadius: 1,
        mt: 0.5,
        bgcolor: isCheck ? yellow[50] : grey[100],
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ListItemButton
        sx={{
          width: '100%',
          height: warning ? 50 : 35,
          px: 1.5,
          py: 0.5,
        }}
        dense
        disableTouchRipple
        disabled={!isObtainable}
      >
        {children}
      </ListItemButton>
    </ListItem>
  );
};

export default ExpListItemUI;
