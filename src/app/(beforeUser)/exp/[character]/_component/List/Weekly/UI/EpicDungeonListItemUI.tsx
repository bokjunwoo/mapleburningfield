import ExpSelectCheckboxUI from '../../../Checkbox/ExpSelectCheckboxUI';
import ExpItemIconUI from '../../common/ExpItemIconUI';
import ExpListItemUI from '../../common/ExpListItemUI';
import EpicDungeonItemTextUI from './EpicDungeonItemTextUI';
import { EPIC_DUNGEON_MIN_REGIONS_LEVEL } from '@/app/constants/exp/weekly';
import useSingleSelectCheckbox from '@/app/hooks/useSingleSelectCheckbox';

type Props<T extends EpicDungeonRegion> = {
  item: ExpectedExpRegion<T>;
  title: ExpContentTitle;
  characterLevel: number;
  expectedExpRegion: ExpectedExpRegion<T>[];
};

const EpicDungeonListItemUI = <T extends EpicDungeonRegion>({
  item,
  title,
  characterLevel,
  expectedExpRegion,
}: Props<T>) => {
  const { selected, handleCheckboxChange } = useSingleSelectCheckbox({
    title,
    initialSelected:
      expectedExpRegion.find((expectedItem) => expectedItem.checked)?.region ||
      null,
  });

  const isObtainable =
    characterLevel >= EPIC_DUNGEON_MIN_REGIONS_LEVEL[item.region];

  return (
    <ExpListItemUI isCheck={item.checked} isObtainable={isObtainable}>
      <ExpSelectCheckboxUI
        region={item.region}
        selected={selected}
        handleChange={handleCheckboxChange}
      />

      <ExpItemIconUI region={item.region} folder="region_icon" />

      <EpicDungeonItemTextUI
        item={item}
        characterLevel={characterLevel}
        isObtainable={isObtainable}
      />
    </ExpListItemUI>
  );
};

export default EpicDungeonListItemUI;
