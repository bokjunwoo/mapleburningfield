import ExpCheckboxUI from '../../../Checkbox/ExpCheckboxUI';
import ExpItemIconUI from '../../common/ExpItemIconUI';
import ExpListItemUI from '../../common/ExpListItemUI';
import WeeklyQuestItemTextUI from './WeeklyQuestItemTextUI';
import { ARANE_RIVER_WEEKLY_QUEST_MIN_REGIONS_LEVEL } from '@/app/constants/exp/weekly';
import useExpContent from '@/app/hooks/useExpContent';

type Props = {
  item: ExpectedExpRegion<AraneRiverWeeklyQuestRegion>;
  title: ExpContentTitle;
  characterLevel: number;
};

const WeeklyQuestListItemUI = ({ item, title, characterLevel }: Props) => {
  const { handleCheckboxChange, count, increment, decrement } = useExpContent({
    title,
    region: item.region,
    initialChecked: item.checked,
    initialCount: 1,
  });

  const isObtainable =
    characterLevel >= ARANE_RIVER_WEEKLY_QUEST_MIN_REGIONS_LEVEL[item.region];

  return (
    <ExpListItemUI
      isCheck={item.checked}
      isObtainable={isObtainable}
      warning={item.warning}
    >
      <ExpCheckboxUI
        region={item.region}
        isChecked={item.checked}
        handleCheckboxChange={handleCheckboxChange}
        warning={item.warning}
      />

      <ExpItemIconUI
        region={item.region}
        folder="region_icon"
        warning={item.warning}
      />

      <WeeklyQuestItemTextUI
        item={item}
        count={count}
        increment={increment}
        decrement={decrement}
        characterLevel={characterLevel}
        isObtainable={isObtainable}
        warning={item.warning}
      />
    </ExpListItemUI>
  );
};

export default WeeklyQuestListItemUI;
