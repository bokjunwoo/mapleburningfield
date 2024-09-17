import { FormControlLabel, Radio } from '@mui/material';

type Props = {
  item: RadioItem;
};

const StatRuneRadioUI = ({ item }: Props) => {
  return (
    <FormControlLabel
      value={item.value}
      control={<Radio size="small" sx={{ p: 0, width: 20, height: 20 }} />}
      label={item.label}
      sx={{
        height: 20,
        m: 0,
        '& .MuiFormControlLabel-label': {
          ml: 0.2,
          fontSize: 14,
          lineHeight: '20px',
        },
      }}
    />
  );
};

export default StatRuneRadioUI;
