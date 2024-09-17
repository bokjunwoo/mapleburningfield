import { ButtonGroup } from '@mui/material';
import SelectButtonUI from './SelectButtonUI';

type Props = {
  options: string[];
  selected: string;
  handleOptionSelect: (value: string) => void;
};

const RateButtonGroupUI = ({
  options,
  selected,
  handleOptionSelect,
}: Props) => {
  return (
    <ButtonGroup
      fullWidth
      variant="outlined"
      aria-label="rate_button_group"
      sx={{ height: 40 }}
    >
      {options.map((item) => (
        <SelectButtonUI
          key={item}
          selected={selected}
          label={item}
          handleChange={handleOptionSelect}
        />
      ))}
    </ButtonGroup>
  );
};

export default RateButtonGroupUI;
