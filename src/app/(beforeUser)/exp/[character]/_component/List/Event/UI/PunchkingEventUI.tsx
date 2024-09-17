import { useRecoilValue } from 'recoil';
import ExpContentListUI from '../../common/ExpContentListUI';
import PunchkingEventItemInputUI from './PunchkingEventItemInputUI';
import PunchkingEventItemUI from './PunchkingEventItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
  inputValue: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PunchkingEventUI = ({
  title,
  characterLevel,
  inputValue,
  handleInputChange,
}: Props) => {
  const expectedExpRegion = useRecoilValue<ExpectedExpRegion<PunchkingScore>[]>(
    expectedExpRegionState(title),
  );

  return (
    <ExpContentListUI
      title={title}
      characterLevel={characterLevel}
      icon="펀치킹"
    >
      {expectedExpRegion.map((item) =>
        item.region === '직접입력' ? (
          <PunchkingEventItemInputUI
            key={item.region}
            item={item}
            title={title}
            characterLevel={characterLevel}
            expectedExpRegion={expectedExpRegion}
            value={inputValue}
            handleInputChange={handleInputChange}
          />
        ) : (
          <PunchkingEventItemUI
            key={item.region}
            item={item}
            title={title}
            characterLevel={characterLevel}
            expectedExpRegion={expectedExpRegion}
          />
        ),
      )}
    </ExpContentListUI>
  );
};

export default PunchkingEventUI;
