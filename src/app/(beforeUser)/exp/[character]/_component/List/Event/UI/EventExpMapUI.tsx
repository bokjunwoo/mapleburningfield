import { SelectChangeEvent, Typography } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import EventExpMapRadioUI from '../../../Radio/EventExpMapRadioUI';
import ExpContentListUI from '../../common/ExpContentListUI';
import EventExpMapTimeSettingItemUI from './EventExpMapTimeSettingItemUI';
import EventMapListItemUI from './EventMapListItemUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import useRadio from '@/app/hooks/useRadio';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
  selectValue: TimeUnit;
  inputValue: number;
  handleSelectChange: (event: SelectChangeEvent<TimeUnit>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const EventExpMapUI = ({
  title,
  characterLevel,
  selectValue,
  inputValue,
  handleSelectChange,
  handleInputChange,
}: Props) => {
  const expectedExpRegion = useRecoilValue<ExpectedExpRegion<EventMapRegion>[]>(
    expectedExpRegionState(title),
  );

  const [expMultiplier, handleExpMultiplierChange] = useRadio(title);

  return (
    <ExpContentListUI
      title={title}
      icon="잠수맵"
      characterLevel={characterLevel}
    >
      <EventExpMapRadioUI
        value={expMultiplier}
        handleChange={handleExpMultiplierChange}
      />

      <EventExpMapTimeSettingItemUI
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        selectValue={selectValue}
        handleSelectChange={handleSelectChange}
      />

      {expectedExpRegion.map((item) => (
        <EventMapListItemUI
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
        ❖ 이벤트 진행기간 24.08.13 ~ 24.10.16
      </Typography>
    </ExpContentListUI>
  );
};

export default EventExpMapUI;
