import { Typography } from '@mui/material';
import MediaQureyCellUI from '../../common/MediaQureyCellUI';
import TotalMobExpCellUI from '../../common/TotalMobExpCellUI';
import TotalMobMesoCellUI from '../../common/TotalMobMesoCellUI';
import BurningFieldSelect from '@/app/_component/Select/BurningFieldSelect';
import { PER_MINUTE_SPAWN_COUNT } from '@/app/constants/time';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  headCell: HeadCell;
  mapInfo: MapInfo;
  characterLevel: number;
  timeInMinutes: number;
};

const PlaceCellUI = ({
  headCell,
  mapInfo,
  characterLevel,
  timeInMinutes,
}: Props) => {
  if (headCell.id === 'mob_levels') {
    const uniqueMobLevels = [...new Set(mapInfo.mobs.map((mob) => mob.level))];

    return (
      <MediaQureyCellUI headCell={headCell}>
        <Typography variant="body2" fontSize={13}>
          {uniqueMobLevels.join(', ')}
        </Typography>
      </MediaQureyCellUI>
    );
  }

  if (headCell.id === 'total_number_of_mob') {
    const mobCount = mapInfo.total_number_of_mob;
    const mobCountByTime =
      mapInfo.total_number_of_mob * timeInMinutes * PER_MINUTE_SPAWN_COUNT;

    return (
      <MediaQureyCellUI headCell={headCell}>
        {mobCount} / {mobCountByTime.toLocaleString()}
      </MediaQureyCellUI>
    );
  }

  if (headCell.id === 'total_mob_exp') {
    const expByTime = mapInfo.total_mob_exp * timeInMinutes;
    const expPercentage = calculateExpPercentage(characterLevel, expByTime);

    return (
      <MediaQureyCellUI headCell={headCell}>
        <TotalMobExpCellUI
          expReward={expByTime}
          expPercentage={expPercentage}
        />
      </MediaQureyCellUI>
    );
  }

  if (headCell.id === 'total_mob_meso') {
    const pureMesoByTime = mapInfo.total_mob_meso.pure * timeInMinutes;
    const bonusMesoByTime = mapInfo.total_mob_meso.bonus * timeInMinutes;

    return (
      <MediaQureyCellUI headCell={headCell}>
        <TotalMobMesoCellUI
          pureMeso={pureMesoByTime}
          bonusMeso={bonusMesoByTime}
        />
      </MediaQureyCellUI>
    );
  }

  if (headCell.id === 'burning_field') {
    return (
      <MediaQureyCellUI headCell={headCell}>
        <BurningFieldSelect mapInfo={mapInfo} />
      </MediaQureyCellUI>
    );
  }

  return (
    <MediaQureyCellUI headCell={headCell}>
      {mapInfo[headCell.id]}
    </MediaQureyCellUI>
  );
};

export default PlaceCellUI;
