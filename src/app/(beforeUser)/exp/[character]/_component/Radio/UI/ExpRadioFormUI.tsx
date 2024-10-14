import { FormControl, FormLabel, RadioGroup } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

type Props = {
  title: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
};

const ExpRadioFormUI = ({ title, value, handleChange, children }: Props) => {
  return (
    <FormControl
      fullWidth
      sx={{
        height: 78,
        bgcolor: blueGrey[700],
        mt: 0.5,
        px: 1.5,
        pt: 0.5,
        borderBottom: `1px solid ${grey[300]}`,
        borderRadius: 1,
      }}
    >
      <FormLabel
        id={`${title}_radio_buttons_group`}
        sx={{
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#FFC107',
          '&.Mui-focused': {
            color: '#FFC107',
          },
        }}
      >
        {title}
      </FormLabel>

      <RadioGroup
        value={value}
        onChange={handleChange}
        row
        aria-labelledby={`${title}_controlled_radio_buttons_group`}
        name={title}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
};

export default ExpRadioFormUI;
