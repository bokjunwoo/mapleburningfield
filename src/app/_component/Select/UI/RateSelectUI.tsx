import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  menuItem: SelectMenuItem;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const RateSelcetUI = ({ menuItem, value, handleChange }: Props) => {
  return (
    <FormControl fullWidth size="small" sx={{ ml: 1 }}>
      <InputLabel sx={{ fontSize: 13, color: grey[800] }}>
        {menuItem.label}
      </InputLabel>

      <Select
        labelId={menuItem.key}
        label={menuItem.label}
        value={value}
        name={menuItem.key}
        onChange={handleChange}
        sx={{ fontSize: 13, height: 36 }}
        inputProps={{
          'aria-label': `${menuItem.key}_select`,
        }}
      >
        {menuItem.items.map((item) => {
          return (
            <MenuItem value={item.value} key={item.value} sx={{ fontSize: 13 }}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default RateSelcetUI;
