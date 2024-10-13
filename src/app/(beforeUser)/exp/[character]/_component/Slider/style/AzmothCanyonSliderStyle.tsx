import styled from '@emotion/styled';
import { Slider } from '@mui/material';
import { yellow } from '@mui/material/colors';

const AzmothCanyonSliderStyle = styled(Slider)({
  color: '#FFC107',
  height: 6,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-value': {
    p: 0,
  },
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
    color: yellow[100],
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-markLabel': {
    color: '#F5F0CB',
    fontSize: 12,
  },
});

export default AzmothCanyonSliderStyle;
