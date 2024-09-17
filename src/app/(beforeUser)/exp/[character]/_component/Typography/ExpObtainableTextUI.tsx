import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { truncateToFixed } from '@/app/utils/format';

type Props = {
  region: string;
  expPercentage: number;
};

const ExpObtainableTextUI = ({ region, expPercentage }: Props) => {
  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between">
        <Typography
          component="span"
          variant="body2"
          color={grey[800]}
          fontWeight={500}
        >
          {region}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          color={grey[800]}
          fontWeight={500}
        >
          {truncateToFixed(expPercentage, 3)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpObtainableTextUI;
