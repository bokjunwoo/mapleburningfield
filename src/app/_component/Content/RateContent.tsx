'use client';

import { Box, Stack } from '@mui/material';
import PresetButtonUI from '../Button/UI/PresetButtonUI';
import RateButtonGroupUI from '../Button/UI/RateButtonGroupUI';
import RatePresetDialogUI from '../Dialog/RatePresetDialogUI';
import ExpRateList from '../List/Rate/ExpRateList';
import ItemDropRateList from '../List/Rate/ItemDropRateList';
import MesoDropRateList from '../List/Rate/MesoDropRateList';
import RatesPanelList from '../List/Rate/RatesPanelList';
import useOptionSelect from '@/app/hooks/useOptionSelect';

const RateContent = () => {
  const { selected, handleOptionSelect } = useOptionSelect('경험치 획득량');

  const buttonOptions: string[] = [
    '경험치 획득량',
    '아이템 드롭률',
    '메소 획득량',
  ];

  return (
    <Box>
      <RateButtonGroupUI
        options={buttonOptions}
        selected={selected}
        handleOptionSelect={handleOptionSelect}
      />

      <Stack
        direction="row"
        spacing={1}
        justifyContent="flex-end"
        mt={1}
        mb={1}
      >
        <RatePresetDialogUI />

        <PresetButtonUI />
      </Stack>

      {selected === '경험치 획득량' && <ExpRateList />}
      {selected === '아이템 드롭률' && <ItemDropRateList />}
      {selected === '메소 획득량' && <MesoDropRateList />}

      <RatesPanelList />
    </Box>
  );
};

export default RateContent;
