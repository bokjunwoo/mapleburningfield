'use client';

import { FormGroup } from '@mui/material';
import { useRecoilValue } from 'recoil';
import RegionChip from '../../Chip/RegionChip';
import { areaSelector } from '@/app/atoms/areaState';

const RegionTabUI = () => {
  const regionList = useRecoilValue(areaSelector);

  return (
    <FormGroup row role="tabpanel">
      {regionList.map((region) => {
        return <RegionChip key={region} region={region} />;
      })}
    </FormGroup>
  );
};

export default RegionTabUI;
