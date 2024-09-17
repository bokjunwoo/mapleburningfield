import ExpCheckboxUI from '../../../Checkbox/ExpCheckboxUI';
import ExpItemIconUI from '../../common/ExpItemIconUI';
import ExpListItemUI from '../../common/ExpListItemUI';
import ExtremeParkItemTextUI from './ExtremeParkItemTextUI';
import useExpContent from '@/app/hooks/useExpContent';

type Props = {
  item: ExpectedExpRegion<MonsterParkRegion>;
  title: ExpContentTitle;
  characterLevel: number;
};

const ExtremeParkListItemUI = ({ item, title, characterLevel }: Props) => {
  const isObtainableExtremePark = characterLevel >= 260;

  const { handleCheckboxChange } = useExpContent({
    title,
    region: item.region,
    initialChecked: item.checked,
    initialCount: 1,
  });

  return (
    <ExpListItemUI
      isObtainable={isObtainableExtremePark}
      isCheck={item.checked}
    >
      <ExpCheckboxUI
        region={item.region}
        isChecked={item.checked}
        handleCheckboxChange={handleCheckboxChange}
      />

      <ExpItemIconUI region={item.region} folder="symbol_icon" />

      <ExtremeParkItemTextUI
        item={item}
        characterLevel={characterLevel}
        isObtainable={isObtainableExtremePark}
      />
    </ExpListItemUI>
  );
};

export default ExtremeParkListItemUI;
