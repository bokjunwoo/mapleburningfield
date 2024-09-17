import { TableCell } from '@mui/material';
import { RecoilState, SerializableParam, useRecoilValue } from 'recoil';
import TotalMobExpCellUI from '../../common/TotalMobExpCellUI';
import useMapContentReward from '@/app/hooks/useMapContentsReward';

type Props = {
  mapInfo: MapInfo;
  item: MobContentCell;
  selectedValue: number;
  runeState: (param: SerializableParam) => RecoilState<number>;
};

const ActiveExpRewardCellUI = ({
  mapInfo,
  item,
  selectedValue,
  runeState,
}: Props) => {
  const { mapContentExpReward, expPercentage } = useMapContentReward({
    mapInfo,
    item,
    selectedValue,
  });

  const runeValue = useRecoilValue(runeState(mapInfo.map_name));

  const columnWidth = (100 - 15) / 2;

  return (
    <TableCell
      width={columnWidth}
      align="center"
      sx={{
        bgcolor: runeValue === item.runeValue ? '#FFFFCC' : '',
        p: 0,
      }}
    >
      <TotalMobExpCellUI
        expReward={mapContentExpReward}
        expPercentage={expPercentage}
      />
    </TableCell>
  );
};

export default ActiveExpRewardCellUI;
