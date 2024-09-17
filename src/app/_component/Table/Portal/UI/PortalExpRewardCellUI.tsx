import { TableCell, Typography } from '@mui/material';
import usePortalReward from '@/app/hooks/usePortalReward';
import { formatNumber, truncateToFixed } from '@/app/utils/format';

type Props = {
  mapInfo: MapInfo;
  type: 'Pollo' | 'Pritto';
  expMultiplier: number;
  count: number;
};

const PortalExpRewardCellUI = ({
  mapInfo,
  type,
  expMultiplier,
  count,
}: Props) => {
  const { portalExpReward, expPercentage } = usePortalReward({
    mapInfo,
    type,
    expMultiplier,
    count,
  });

  return (
    <TableCell align="center" sx={{ p: 0 }}>
      <Typography variant="body2">{formatNumber(portalExpReward)}</Typography>
      <Typography variant="body2" fontSize={12} color="GrayText">
        {truncateToFixed(expPercentage, 3)}%
      </Typography>
    </TableCell>
  );
};

export default PortalExpRewardCellUI;
