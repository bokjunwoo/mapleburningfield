import { useRecoilValue } from 'recoil';
import EpicDungeonExpRadioUI from '../../../Radio/EpicDungeonExpRadioUI';
import ExpContentListUI from '../../common/ExpContentListUI';
import EpicDungeonListItemUI from './EpicDungeonListItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import useRadio from '@/app/hooks/useRadio';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
};

const EpicDungeonListUI = ({ title, characterLevel }: Props) => {
  const expectedExpRegion = useRecoilValue<
    ExpectedExpRegion<EpicDungeonRegion>[]
  >(expectedExpRegionState(title));

  const [expMultiplier, handleExpMultiplierChange] = useRadio(title);

  return (
    <ExpContentListUI title={title} characterLevel={characterLevel}>
      <EpicDungeonExpRadioUI
        value={expMultiplier}
        handleChange={handleExpMultiplierChange}
      />

      {expectedExpRegion.map((item) => (
        <EpicDungeonListItemUI
          key={item.region}
          item={item}
          title={title}
          characterLevel={characterLevel}
          expectedExpRegion={expectedExpRegion}
        />
      ))}
    </ExpContentListUI>
  );
};

export default EpicDungeonListUI;
