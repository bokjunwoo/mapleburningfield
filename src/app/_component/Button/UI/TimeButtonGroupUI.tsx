import { ButtonGroup } from '@mui/material';
import SelectButtonUI from './SelectButtonUI';

type Props = {
  options: string[];
  selected: string;
  handleOptionSelect: (value: string) => void;
};

const TimeButtonGroup = ({ options, selected, handleOptionSelect }: Props) => {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="time_button_group"
      sx={{ height: 32 }}
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

export default TimeButtonGroup;
