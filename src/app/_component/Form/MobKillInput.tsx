import { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import MobKillInputUI from './UI/MobKillInputUI';
import { mobKillsState } from '@/app/atoms/mobKillsState';
import { REGEX } from '@/app/constants/constants';

const MobKillInput = ({ mapInfo }: MapInfoProps) => {
  const [mobKillCount, setMobKillCount] = useRecoilState(
    mobKillsState(mapInfo.map_name),
  );

  const handleMobKillChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setMobKillCount(targetValue);
    }

    if (targetValue > mapInfo.total_number_of_mob) {
      setMobKillCount(mapInfo.total_number_of_mob);
    }

    if (targetValue < 0) {
      setMobKillCount(0);
    }
  };

  useEffect(() => {
    setMobKillCount(mapInfo.total_number_of_mob);
  }, [mapInfo.total_number_of_mob, setMobKillCount]);

  return (
    <MobKillInputUI
      description="1젠당 잡을 수 있는 마릿수"
      adornment={mapInfo.total_number_of_mob}
      value={mobKillCount}
      handleChange={handleMobKillChange}
    />
  );
};

export default MobKillInput;
