import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { orange } from '@mui/material/colors';

type PortalSelectUIProps = {
  menuItem: SelectItem[];
  value: number;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
};

const PortalSelectUI = ({
  menuItem,
  value,
  handleChange,
}: PortalSelectUIProps) => {
  return (
    <FormControl fullWidth>
      <Select
        value={value.toString()}
        onChange={handleChange}
        inputProps={{
          'aria-label': 'select_portal_box',
          sx: {
            fontSize: 14,
            ml: 1,
            p: 0,
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
              borderColor: orange[500],
              boxShadow: `0 0 0 2px rgba(255, 153, 0, 0.4)`,
            },
          },
        }}
      >
        {menuItem.map((item) => {
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

export default PortalSelectUI;
