import { Radio } from '@mui/material';

type Props = {
  selectedValue: string;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ExpRadioUI = ({ selectedValue, label, handleChange }: Props) => {
  return (
    <Radio
      disableRipple
      size="small"
      checked={selectedValue === label}
      onChange={handleChange}
      value={label}
      name={`${label}_radio_button`}
      inputProps={{ 'aria-label': `${label}_label` }}
      sx={{ ml: -1 }}
    />
  );
};

export default ExpRadioUI;
