import ExpCheckboxUI from '../../../Checkbox/ExpCheckboxUI';
import ExpItemIconUI from '../../common/ExpItemIconUI';
import ExpListItemUI from '../../common/ExpListItemUI';
import HighEndDungeonItemTextUI from './HighEndDungeonItemTextUI';
import useExpContent from '@/app/hooks/useExpContent';

type Props = {
  item: ExpectedExpRegion<MonsterParkRegion>;
  title: ExpContentTitle;
  characterLevel: number;
};

const HighEndDungeonListItemUI = ({ item, title, characterLevel }: Props) => {
  const { handleCheckboxChange, count, increment, decrement } =
    useExpContent<MonsterParkRegion>({
      title,
      region: item.region,
      initialChecked: item.checked,
      initialCount: 1,
    });

  return (
    <ExpListItemUI isCheck={item.checked}>
      <ExpCheckboxUI
        region={item.region}
        isChecked={item.checked}
        handleCheckboxChange={handleCheckboxChange}
      />

      <ExpItemIconUI region={item.region} folder="region_icon" />

      <HighEndDungeonItemTextUI
        item={item}
        count={count}
        increment={increment}
        decrement={decrement}
        characterLevel={characterLevel}
      />
    </ExpListItemUI>
  );
};

export default HighEndDungeonListItemUI;
