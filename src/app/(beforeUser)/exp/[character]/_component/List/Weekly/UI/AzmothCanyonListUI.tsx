import { useRecoilValue } from 'recoil';
import AzmothCanyonInputUI from '../../../Input/AzmothCanyonInputUI';
import ExpContentListUI from '../../common/ExpContentListUI';
import AzmothCanyonListItemDiffUI from './AzmothCanyonListItemDiffUI';
import AzmothCanyonListItemUI from './AzmothCanyonListItemUI';
import AzmothCanyonSliderItemUI from './AzmothCanyonSliderItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import { EXP_CONTENT } from '@/app/constants/rate';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
  inputValue: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sliderValue: number;
  handleSliderChange: (event: Event, newValue: number | number[]) => void;
};

const AzmothCanyonListUI = ({
  title,
  characterLevel,
  inputValue,
  handleInputChange,
  sliderValue,
  handleSliderChange,
}: Props) => {
  const expectedExpRegion = useRecoilValue<
    ExpectedExpRegion<AzmothCanyonRegion>[]
  >(expectedExpRegionState(title));

  return (
    <ExpContentListUI
      title={title}
      characterLevel={characterLevel}
      icon={EXP_CONTENT.AZMOTH_CANYON}
    >
      <AzmothCanyonSliderItemUI
        value={sliderValue}
        handleChange={handleSliderChange}
      />

      <AzmothCanyonInputUI
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />

      {expectedExpRegion.map((item) =>
        item.region === '경험치' ? (
          <AzmothCanyonListItemUI
            key={item.region}
            characterLevel={characterLevel}
            item={item}
          />
        ) : (
          <AzmothCanyonListItemDiffUI
            key={item.region}
            item={item}
            inputValue={inputValue}
          />
        ),
      )}
    </ExpContentListUI>
  );
};

export default AzmothCanyonListUI;
