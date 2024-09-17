import { Box, CardContent, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import BurningFieldSliderUI from '@/app/_component/Slider/BurningFieldSliderUI';
import useBurningFieldSlider from '@/app/hooks/useBurningFieldSlider';

type Props = {
  mapName: string;
};

const BurningFieldCardContentUI = ({ mapName }: Props) => {
  const { sliderValue, handleSliderChange } = useBurningFieldSlider(mapName);

  return (
    <CardContent>
      <Box>
        <Typography variant="body2" fontSize={16} fontWeight={600}>
          버닝필드
        </Typography>
        <Typography
          variant="body2"
          fontSize={14}
          fontWeight={600}
          color={red[400]}
        >
          {sliderValue}단계 적용중
        </Typography>
      </Box>

      <BurningFieldSliderUI
        sliderValue={sliderValue}
        handleChange={handleSliderChange}
      />
    </CardContent>
  );
};

export default BurningFieldCardContentUI;
