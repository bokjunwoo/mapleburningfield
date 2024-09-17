import { useRecoilValue } from 'recoil';
import ExpContentListUI from '../../common/ExpContentListUI';
import WeeklyQuestListItemUI from './WeeklyQuestListItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
};

const WeeklyQuestListUI = ({ title, characterLevel }: Props) => {
  const expectedExpRegion = useRecoilValue<
    ExpectedExpRegion<AraneRiverWeeklyQuestRegion>[]
  >(expectedExpRegionState(title));

  return (
    <ExpContentListUI title={title} characterLevel={characterLevel}>
      {expectedExpRegion.map((item) => (
        <WeeklyQuestListItemUI
          key={item.region}
          item={item}
          title={title}
          characterLevel={characterLevel}
        />
      ))}
    </ExpContentListUI>
  );
};

export default WeeklyQuestListUI;
