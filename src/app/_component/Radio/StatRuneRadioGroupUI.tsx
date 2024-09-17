import { FormControl, RadioGroup } from '@mui/material';
import StatRuneRadioUI from './StatRuneRadioUI';

type Props = {
  item: StatRadioItem;
};

const StatRuneRadioGroupUI = ({ item }: Props) => {
  return (
    <FormControl fullWidth>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        sx={{
          height: 20,
          alignItems: 'center',
        }}
        value={item.value}
        onChange={item.handleChange}
      >
        {item.radios.map((radio) => (
          <StatRuneRadioUI key={radio.label} item={radio} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default StatRuneRadioGroupUI;
