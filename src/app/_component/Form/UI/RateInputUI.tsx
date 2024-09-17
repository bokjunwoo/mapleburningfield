import { FormControl, TextField, InputAdornment } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
  option: RateInputOption;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RateInputUI = ({ option, value, handleChange }: Props) => {
  return (
    <FormControl fullWidth sx={{ ml: 1 }}>
      <TextField
        size="small"
        label={option.label}
        value={value}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ color: grey[800] }}>
              %
            </InputAdornment>
          ),
        }}
        sx={{ p: 0 }}
        InputLabelProps={{ sx: { fontSize: 13, color: grey[800] } }}
        inputProps={{
          sx: { fontSize: 14, height: 36, pt: 0, pb: 0 },
          'aria-label': `${option.key}_input`,
        }}
      />
    </FormControl>
  );
};

export default RateInputUI;
