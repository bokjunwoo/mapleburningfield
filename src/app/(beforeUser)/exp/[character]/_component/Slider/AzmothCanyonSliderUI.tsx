import { Box } from '@mui/material';
import AzmothCanyonSliderStyle from './style/AzmothCanyonSliderStyle';

type Props = {
  sliderValue: number;
  handleChange: (event: Event, newValue: number | number[]) => void;
};

const AzmothCanyonSliderUI = ({ sliderValue, handleChange }: Props) => {
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 2500,
      label: '2500',
    },
    {
      value: 5000,
      label: '5000',
    },
    {
      value: 7500,
      label: '7500',
    },
    {
      value: 10000,
      label: '10000',
    },
  ];

  const getAriaValueText = (value: number) => {
    return `${value}`;
  };

  return (
    <Box sx={{ mt: 0, mb: -0.5, mx: 1.5, width: '100%' }}>
      <AzmothCanyonSliderStyle
        value={sliderValue}
        onChange={handleChange}
        getAriaValueText={getAriaValueText}
        marks={marks}
        step={2500}
        min={0}
        max={10000}
      />
    </Box>
  );
};

export default AzmothCanyonSliderUI;
