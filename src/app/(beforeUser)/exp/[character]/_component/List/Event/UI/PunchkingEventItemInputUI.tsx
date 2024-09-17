import ExpSelectCheckboxUI from '../../../Checkbox/ExpSelectCheckboxUI';
import PunchkingEventInputUI from '../../../Input/PunchkingEventInputUI';
import ExpListItemUI from '../../common/ExpListItemUI';
import useSingleSelectCheckbox from '@/app/hooks/useSingleSelectCheckbox';

type Props = {
  item: ExpectedExpRegion<PunchkingScore>;
  title: ExpContentTitle;
  characterLevel: number;
  expectedExpRegion: ExpectedExpRegion<PunchkingScore>[];
  value: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PunchkingEventItemInputUI = ({
  item,
  title,
  characterLevel,
  expectedExpRegion,
  value,
  handleInputChange,
}: Props) => {
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

      <PunchkingEventInputUI
        exp={item.exp}
        characterLevel={characterLevel}
        value={value}
        handleChange={handleInputChange}
      />
    </ExpListItemUI>
  );
};

export default PunchkingEventItemInputUI;
