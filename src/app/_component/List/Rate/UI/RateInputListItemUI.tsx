import { Avatar, ListItem, ListItemButton } from '@mui/material';
import RateInputUI from '@/app/_component/Form/UI/RateInputUI';

type Props = {
  option: RateInputOption;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RateInputListItemUI = ({ option, value, handleChange }: Props) => {
  return (
    <ListItemButton sx={{ px: 1 }}>
      <ListItem sx={{ p: 0 }}>
        <Avatar
          variant="rounded"
          alt={option.label}
          src={`/images/rate_icon/${option.key}.png`}
          sx={{ width: 36, height: 36 }}
        />

        <RateInputUI
          option={option}
          value={value}
          handleChange={handleChange}
        />
      </ListItem>
    </ListItemButton>
  );
};

export default RateInputListItemUI;
