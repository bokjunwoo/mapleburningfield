import { Typography } from '@mui/material';
import { formatNumber, truncateToFixed } from '@/app/utils/format';

type Props = {
  expReward: number;
  expPercentage: number;
};

const TotalMobExpCellUI = ({ expReward, expPercentage }: Props) => {
  return (
    <>
      <Typography variant="body2">{formatNumber(expReward)}</Typography>

      <Typography variant="body2" fontSize={12} color="GrayText">
        {truncateToFixed(expPercentage, 3)}%
      </Typography>
    </>
  );
};

export default TotalMobExpCellUI;
