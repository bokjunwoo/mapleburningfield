import {
  Avatar,
  ListItem,
  ListItemButton,
  SelectChangeEvent,
} from '@mui/material';
import RateSelcetUI from '@/app/_component/Select/UI/RateSelectUI';

type Props = {
  option: SelectMenuItem;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const RateSelectListItemUI = ({ option, value, handleChange }: Props) => {
  return (
    <ListItemButton sx={{ px: 1 }}>
      <ListItem sx={{ p: 0 }}>
        <Avatar
          variant="rounded"
          alt={option.label}
          src={`/images/rate_icon/${option.key}.png`}
          sx={{ width: 36, height: 36 }}
        />

        <RateSelcetUI
          menuItem={option}
          value={value}
          handleChange={handleChange}
        />
      </ListItem>
    </ListItemButton>
  );
};

export default RateSelectListItemUI;
