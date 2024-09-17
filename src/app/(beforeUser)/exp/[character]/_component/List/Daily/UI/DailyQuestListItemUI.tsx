import ExpCheckboxUI from '../../../Checkbox/ExpCheckboxUI';
import ExpItemIconUI from '../../common/ExpItemIconUI';
import ExpListItemUI from '../../common/ExpListItemUI';
import DailyQuestItemTextUI from './DailyQuestItemTextUI';
import useExpContent from '@/app/hooks/useExpContent';

type Props<T extends ExpQuestContent> = {
  item: ExpectedExpRegion<T>;
  title: ExpContentTitle;
  characterLevel: number;
  minRegionsLevel: { [key in T]: number };
};

const DailyQuestListItemUI = <T extends ExpQuestContent>({
  item,
  title,
  characterLevel,
  minRegionsLevel,
}: Props<T>) => {
  const { handleCheckboxChange } = useExpContent({
    title,
    region: item.region,
    initialChecked: item.checked,
    initialCount: 1,
  });

  const isObtainable = characterLevel >= minRegionsLevel[item.region];

  return (
    <ExpListItemUI
      isCheck={item.checked}
      warning={item.warning}
      isObtainable={isObtainable}
    >
      <ExpCheckboxUI
        region={item.region}
        isChecked={item.checked}
        warning={item.warning}
        handleCheckboxChange={handleCheckboxChange}
      />

      <ExpItemIconUI
        region={item.region}
        folder="symbol_icon"
        warning={item.warning}
      />

      <DailyQuestItemTextUI
        item={item}
        characterLevel={characterLevel}
        isObtainable={isObtainable}
        warning={item.warning}
      />
    </ExpListItemUI>
  );
};

export default DailyQuestListItemUI;
