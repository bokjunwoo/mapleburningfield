import { SelectChangeEvent, Typography } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import VIPSaunaRadioUI from '../../../Radio/VIPSaunaRadioUI';
import ExpContentListUI from '../../common/ExpContentListUI';
import VIPSaunaListItemUI from './VIPSaunaListItemUI';
import VIPSaunaTimeSettingItemUI from './VIPSaunaTimeSettingItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import useRadio from '@/app/hooks/useRadio';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
  selectValue: VIPSaunaUnit;
  inputValue: number;
  handleSelectChange: (event: SelectChangeEvent<VIPSaunaUnit>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const VIPSaunaUI = ({
  title,
  characterLevel,
  selectValue,
  inputValue,
  handleSelectChange,
  handleInputChange,
}: Props) => {
  const expectedExpRegion = useRecoilValue<ExpectedExpRegion<VIPSaunaRegion>[]>(
    expectedExpRegionState(title),
  );

  const [expMultiplier, handleExpMultiplierChange] = useRadio(title);

  return (
    <ExpContentListUI
      title={title}
      characterLevel={characterLevel}
      icon="VIP 사우나"
    >
      <VIPSaunaRadioUI
        value={expMultiplier}
        handleChange={handleExpMultiplierChange}
      />

      <VIPSaunaTimeSettingItemUI
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        selectValue={selectValue}
        handleSelectChange={handleSelectChange}
      />

      {expectedExpRegion.map((item) => (
        <VIPSaunaListItemUI
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
        ❖ 이벤트 진행기간 24.12.19 ~ 25.02.19
      </Typography>
    </ExpContentListUI>
  );
};

export default VIPSaunaUI;
