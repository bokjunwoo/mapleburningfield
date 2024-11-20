import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import GoldenTomatoInputUI from '../../../Input/GoldenTomatoInputUI';
import GoldenTomatoRadioUI from '../../../Radio/GoldenTomatoRadioUI';
import ExpContentListUI from '../../common/ExpContentListUI';
import GoldenTomatoListItemUI from './GoldenTomatoListItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import useRadio from '@/app/hooks/useRadio';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
  inputValue: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GoldenTomatoUI = ({
  title,
  characterLevel,
  inputValue,
  handleInputChange,
}: Props) => {
  const expectedExpRegion = useRecoilValue<
    ExpectedExpRegion<GoldenTomatoRegion>[]
  >(expectedExpRegionState(title));

  const [expMultiplier, handleExpMultiplierChange] = useRadio(title);

  return (
    <ExpContentListUI
      title={title}
      characterLevel={characterLevel}
      icon="황금 토마토 농장"
    >
      <GoldenTomatoRadioUI
        value={expMultiplier}
        handleChange={handleExpMultiplierChange}
      />

      <GoldenTomatoInputUI
        value={inputValue}
        handleChange={handleInputChange}
      />

      {expectedExpRegion.map((item) => (
        <GoldenTomatoListItemUI
          key={item.region}
          characterLevel={characterLevel}
          item={item}
        />
      ))}

      <Typography
        variant="body2"
        fontSize={12}
        ml={0.5}
        mt={0.5}
        fontWeight={500}
        color={grey[700]}
      >
        ❖ 실제 획득 경험치와 약간의 오차가 발생할 수 있습니다.
      </Typography>
    </ExpContentListUI>
  );
};

export default GoldenTomatoUI;
