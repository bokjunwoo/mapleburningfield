import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { calculateAzmothCoin } from '@/app/utils/exp';

type Props = {
  item: ExpectedExpRegion<AzmothCanyonRegion>;
  inputValue: number;
};

const DiffObtainableTextUI = ({ item, inputValue }: Props) => {
  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between">
        <Typography
          component="span"
          variant="body2"
          color={grey[800]}
          fontWeight={500}
        >
          {item.region}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          color={grey[800]}
          fontWeight={500}
        >
          {item.region === '아즈모스 코인' &&
            `${calculateAzmothCoin(inputValue)}(기본) /`}{' '}
          {item.count}(보너스) 개
        </Typography>
      </Box>
    </Box>
  );
};

export default DiffObtainableTextUI;
