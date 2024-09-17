import { TableCell } from '@mui/material';
import usePortalReward from '@/app/hooks/usePortalReward';
import { formatTime } from '@/app/utils/format';
import { getTimePolloColor, getTimePrittoColor } from '@/app/utils/portal';

type Props = {
  mapInfo: MapInfo;
  type: 'Pollo' | 'Pritto';
  expMultiplier: number;
  count: number;
};

const PortalHuntEfficiencyCellUI = ({
  mapInfo,
  type,
  expMultiplier,
  count,
}: Props) => {
  const { remainingTime } = usePortalReward({
    mapInfo,
    type,
    expMultiplier,
    count,
  });

  return (
    <TableCell
      align="center"
      sx={{
        p: 0,
        bgcolor:
          type === 'Pollo'
            ? getTimePolloColor(remainingTime)
            : getTimePrittoColor(remainingTime),
      }}
    >
      약 {formatTime(remainingTime)}
    </TableCell>
  );
};

export default PortalHuntEfficiencyCellUI;
