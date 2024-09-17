import ExpSelectCheckboxUI from '../../../Checkbox/ExpSelectCheckboxUI';
import ExpListItemUI from '../../common/ExpListItemUI';
import PunchkingItemTextUI from './PunchkingItemTextUI';
import useSingleSelectCheckbox from '@/app/hooks/useSingleSelectCheckbox';

type Props<T extends PunchkingScore> = {
  item: ExpectedExpRegion<T>;
  title: ExpContentTitle;
  characterLevel: number;
  expectedExpRegion: ExpectedExpRegion<T>[];
};

const PunchkingEventItemUI = <T extends PunchkingScore>({
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

  return (
    <ExpListItemUI isCheck={item.checked}>
      <ExpSelectCheckboxUI
        region={item.region}
        selected={selected}
        handleChange={handleCheckboxChange}
      />

      <PunchkingItemTextUI item={item} characterLevel={characterLevel} />
    </ExpListItemUI>
  );
};

export default PunchkingEventItemUI;
