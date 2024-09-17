import { TableCell } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import TotalMobExpCellUI from '../../common/TotalMobExpCellUI';
import TotalMobMesoCellUI from '../../common/TotalMobMesoCellUI';
import { PER_MINUTE_SPAWN_COUNT } from '@/app/constants/time';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  headCell: MobCalculateHeadCell;
  timeOption: MobCalculateTimeOption;
  characterLevel: number;
  mobKills: number;
  expReward: number;
  mesoReward: MobMeso;
};

const MobCalculateCellUI = ({
  headCell,
  timeOption,
  characterLevel,
  mobKills,
  expReward,
  mesoReward,
}: Props) => {
  if (headCell.label === '마릿수') {
    const calculatedMobKills =
      timeOption.label === '1젠'
        ? mobKills
        : mobKills * timeOption.multiplier * PER_MINUTE_SPAWN_COUNT;

    return (
      <TableCell align="center" sx={{ p: 0 }}>
        {calculatedMobKills.toLocaleString()}
      </TableCell>
    );
  }

  if (headCell.label === '경험치') {
    const calculatedExpReward =
      timeOption.label === '1젠'
        ? expReward / timeOption.multiplier
        : expReward * timeOption.multiplier;

    const expPercentage = calculateExpPercentage(
      characterLevel,
      calculatedExpReward,
    );

    return (
      <TableCell align="center" sx={{ p: 0 }}>
        <TotalMobExpCellUI
          expReward={calculatedExpReward}
          expPercentage={expPercentage}
        />
      </TableCell>
    );
  }

  if (headCell.label === '메소') {
    const calculatedPureMesoReward =
      timeOption.label === '1젠'
        ? mesoReward.pure / timeOption.multiplier
        : mesoReward.pure * timeOption.multiplier;
    const calculatedBonusMesoReward =
      timeOption.label === '1젠'
        ? mesoReward.bonus / timeOption.multiplier
        : mesoReward.bonus * timeOption.multiplier;

    return (
      <TableCell align="center" sx={{ p: 0 }}>
        <TotalMobMesoCellUI
          pureMeso={calculatedPureMesoReward}
          bonusMeso={calculatedBonusMesoReward}
        />
      </TableCell>
    );
  }

  return (
    <TableThCellUI align="center" sx={{ p: 0, py: 1.2 }}>
      {timeOption.label}
    </TableThCellUI>
  );
};

export default MobCalculateCellUI;
