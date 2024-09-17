import { Typography } from '@mui/material';
import { truncateToFixed } from '@/app/utils/format';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  characterLevel: number;
  exp: number;
};

const ExpTotalExpTextUI = ({ characterLevel, exp }: Props) => {
  const expPercentage = calculateExpPercentage(characterLevel, exp);

  return (
    <Typography
      textAlign="end"
      variant="body2"
      fontSize={12}
      my={1}
      color="#CCFF00"
    >
      총합 경험치 : {truncateToFixed(expPercentage, 3)}%
    </Typography>
  );
};

export default ExpTotalExpTextUI;
