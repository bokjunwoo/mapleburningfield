import { useRecoilValue } from 'recoil';
import ExpContentListUI from '../../common/ExpContentListUI';
import DailyQuestListItemUI from './DailyQuestListItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';

type Props<T extends ExpQuestContent> = {
  title: ExpContentTitle;
  characterLevel: number;
  minRegionsLevel: { [key in T]: number };
};

const DailyQuestListUI = <T extends ExpQuestContent>({
  title,
  characterLevel,
  minRegionsLevel,
}: Props<T>) => {
  const expectedExpRegion = useRecoilValue<ExpectedExpRegion<T>[]>(
    expectedExpRegionState(title),
  );

  return (
    <ExpContentListUI title={title} characterLevel={characterLevel}>
      {expectedExpRegion.map((item) => (
        <DailyQuestListItemUI
          key={item.region}
          item={item}
          title={title}
          characterLevel={characterLevel}
          minRegionsLevel={minRegionsLevel}
        />
      ))}
    </ExpContentListUI>
  );
};

export default DailyQuestListUI;
