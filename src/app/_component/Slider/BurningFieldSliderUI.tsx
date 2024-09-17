import { Box } from '@mui/material';
import BurningFieldSliderStyle from './style/BurningFieldSliderStyle';

type Props = {
  sliderValue: number;
  handleChange: (event: Event, newValue: number | number[]) => void;
};

const BurningFieldSliderUI = ({ sliderValue, handleChange }: Props) => {
  return (
    <Box sx={{ mx: 1, my: 0.5 }}>
      <BurningFieldSliderStyle
        value={sliderValue}
        onChange={handleChange}
        step={1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default BurningFieldSliderUI;
