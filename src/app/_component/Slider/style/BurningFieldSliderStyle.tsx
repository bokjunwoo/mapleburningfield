import styled from '@emotion/styled';
import { Slider } from '@mui/material';

const BurningFieldSliderStyle = styled(Slider)({
  color: '#ff968a',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-value': {
    p: 0,
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundImage: `url(https://img1.daumcdn.net/thumb/C176x176/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F992E83335B4E915024)`,
    backgroundSize: 'cover',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    p: 0,
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 24,
    height: 24,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#ff968a',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -80%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export default BurningFieldSliderStyle;
