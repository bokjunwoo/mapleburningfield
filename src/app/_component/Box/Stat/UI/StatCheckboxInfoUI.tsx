import StatCheckboxUI from '../../../Checkbox/StatCheckboxUI';
import StatInfoUI from '../common/StatInfoUI';

type Props = {
  item: StatCheckboxItem;
};

const StatCheckboxInfoUI = ({ item }: Props) => {
  return (
    <StatInfoUI label={item.label} iconName={item.iconName}>
      <StatCheckboxUI item={item} />
    </StatInfoUI>
  );
};

export default StatCheckboxInfoUI;
