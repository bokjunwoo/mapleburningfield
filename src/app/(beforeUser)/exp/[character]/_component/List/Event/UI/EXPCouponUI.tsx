import { Typography } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import EXPCouponInputUI from '../../../Input/EXPCouponInputUI';
import EXPCouponRadioUI from '../../../Radio/EXPCouponRadioUI';
import ExpContentListUI from '../../common/ExpContentListUI';
import EXPCouponListItemUI from './EXPCouponListItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import useRadio from '@/app/hooks/useRadio';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
  inputValue: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const EXPCouponUI = ({
  title,
  characterLevel,
  inputValue,
  handleInputChange,
}: Props) => {
  const expectedExpRegion = useRecoilValue<
    ExpectedExpRegion<EXPCouponRegion>[]
  >(expectedExpRegionState(title));

  const [expMultiplier, handleExpMultiplierChange] = useRadio(title);

  return (
    <ExpContentListUI
      title={title}
      characterLevel={characterLevel}
      icon="EXP 교환권"
    >
      <EXPCouponRadioUI
        value={expMultiplier}
        handleChange={handleExpMultiplierChange}
        characterLevel={characterLevel}
      />

      <EXPCouponInputUI value={inputValue} handleChange={handleInputChange} />

      {expectedExpRegion.map((item) => (
        <EXPCouponListItemUI
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
      <Typography
        variant="body2"
        fontSize={12}
        ml={0.5}
        mt={0.5}
        color={orange[900]}
        fontWeight={500}
      >
        ❖ 이벤트 진행기간 24.10.17 ~ 24.12.18
      </Typography>
    </ExpContentListUI>
  );
};

export default EXPCouponUI;
