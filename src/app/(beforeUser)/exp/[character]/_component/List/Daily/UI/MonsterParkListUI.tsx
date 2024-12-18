import { useRecoilValue } from 'recoil';
import MonsterParkRadioUI from '../../../Radio/MonsterParkRadioUI';
import ExpContentListUI from '../../common/ExpContentListUI';
import HighEndDungeonListItemUI from './HighEndDungeonListItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import useRadio from '@/app/hooks/useRadio';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
};

const MonsterParkListUI = ({ title, characterLevel }: Props) => {
  const expectedExpRegion = useRecoilValue<
    ExpectedExpRegion<MonsterParkRegion>[]
  >(expectedExpRegionState(title));

  const [expMultiplier, handleExpMultiplierChange] = useRadio(title);

  return (
    <ExpContentListUI title={title} characterLevel={characterLevel}>
      <MonsterParkRadioUI
        value={expMultiplier}
        handleChange={handleExpMultiplierChange}
      />

      {expectedExpRegion.map((item) => (
        <HighEndDungeonListItemUI
          key={item.region}
          item={item}
          title={title}
          characterLevel={characterLevel}
        />
      ))}
    </ExpContentListUI>
  );
};

export default MonsterParkListUI;
