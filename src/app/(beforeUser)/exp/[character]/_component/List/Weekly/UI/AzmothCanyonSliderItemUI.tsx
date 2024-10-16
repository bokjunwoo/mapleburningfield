import { Box, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import AzmothCanyonSliderUI from '../../../Slider/AzmothCanyonSliderUI';

type Props = {
  value: number;
  handleChange: (event: Event, newValue: number | number[]) => void;
};

const AzmothCanyonSliderItemUI = ({ value, handleChange }: Props) => {
  return (
    <Box
      height={78}
      bgcolor={blueGrey[700]}
      mt={0.5}
      px={1.5}
      pt={0.5}
      borderRadius={1}
    >
      <Typography
        fontSize={15}
        fontWeight="bold"
        color="#FFC107"
        textAlign="center"
        height={21.56}
      >
        보너스 리워드
      </Typography>

      <Box display="flex">
        <AzmothCanyonSliderUI sliderValue={value} handleChange={handleChange} />
      </Box>
    </Box>
  );
};

export default AzmothCanyonSliderItemUI;
