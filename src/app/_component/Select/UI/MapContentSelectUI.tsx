import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { orange } from '@mui/material/colors';

type SelectBoxUIProps = {
  menuItem: SelectMenuItem;
  selectedValue: number;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
};

const MapContentSelectUI = ({
  menuItem,
  selectedValue,
  handleChange,
}: SelectBoxUIProps) => {
  return (
    <FormControl fullWidth>
      <Select
        value={selectedValue.toString()}
        onChange={handleChange}
        inputProps={{
          'aria-label': 'select_box',
          sx: {
            padding: '0px 0px 0px 16px',
            fontSize: 14,
            fontWeight: 500,
          },
        }}
        sx={{
          '&.MuiOutlinedInput-root': {
            height: '40.2px',
            '& fieldset': {
              border: 'none',
              borderRadius: 0,
            },
            '&:hover fieldset': {
              border: '1px solid',
              borderColor: orange[500],
            },
            '&.Mui-focused fieldset': {
              border: '1px solid',
              borderColor: '#FF9900',
              boxShadow: `0 0 0 2px rgba(255, 153, 0, 0.4)`,
            },
          },
        }}
      >
        {menuItem.items.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value} sx={{ fontSize: 14 }}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default MapContentSelectUI;
