'use client';

import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { areaState } from '../../atoms/areaState';
import { GRANDIS_AREA, ARCANERIVER_AREA } from '../../constants/constants';
import TabUI from './UI/TabUI';
import characterLevelState from '@/app/atoms/characterLevelState';

const AreaTab = () => {
  const characterLevel = useRecoilValue(characterLevelState);

  const [area, setArea] = useRecoilState(areaState);

  const handleChange = (event: React.SyntheticEvent, newValue: Area) => {
    setArea(newValue);
  };

  const areas = [ARCANERIVER_AREA, GRANDIS_AREA];

  useEffect(() => {
    setArea(characterLevel >= 260 ? GRANDIS_AREA : ARCANERIVER_AREA);
  }, [characterLevel, setArea]);

  return (
    <TabUI
      value={area}
      contents={areas}
      handleChange={handleChange}
      fontSize={18}
    />
  );
};

export default AreaTab;
