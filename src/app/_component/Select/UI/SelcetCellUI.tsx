import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

type Props = {
  menuItem: SelectMenuItem;
  selectedValue: number;
  handleChange: (event: SelectChangeEvent) => void;
};

const SelcetCellUI = ({ menuItem, selectedValue, handleChange }: Props) => {
  return (
    <FormControl variant="standard" fullWidth size="small">
      <Select
        value={selectedValue.toLocaleString()}
        onChange={handleChange}
        sx={{ fontSize: 14, height: 36 }}
        inputProps={{
          'aria-label': `${menuItem.key}_select`,
        }}
      >
        {menuItem.items.map((item) => {
          return (
            <MenuItem value={item.value} key={item.value} sx={{ fontSize: 14 }}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelcetCellUI;
