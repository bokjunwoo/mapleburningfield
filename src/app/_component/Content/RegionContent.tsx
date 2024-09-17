'use client';

import { Box } from '@mui/material';
import TimeButtonGroupUI from '../Button/UI/TimeButtonGroupUI';
import PlaceTable from '../Table/Place/PlaceTable';
import useOptionSelect from '@/app/hooks/useOptionSelect';

const RegionContent = () => {
  const { selected, handleOptionSelect } = useOptionSelect('30분');

  const buttonOptions: string[] = ['30분', '1시간', '2시간'];

  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" pt={2} pb={1}>
        <TimeButtonGroupUI
          options={buttonOptions}
          selected={selected}
          handleOptionSelect={handleOptionSelect}
        />
      </Box>

      <PlaceTable selectedTime={selected} />
    </Box>
  );
};

export default RegionContent;
