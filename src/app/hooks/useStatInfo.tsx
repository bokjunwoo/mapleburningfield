import { useRecoilState, useRecoilValue } from 'recoil';
import { totalExpRateSelector } from '../atoms/expRateState';
import { totalItemDropRateSelector } from '../atoms/itemDropState';
import {
  boosterRuneState,
  eventSkillRuneState,
} from '../atoms/mapContentState';
import { totalMesoDropRateSelector } from '../atoms/mesoDropState';
import { portalState } from '../atoms/portalState';
import { EVENT_BUFF_STAT } from '../constants/portal';
import { expByEventBuffLevel } from '../utils/portal';
import usePortalBuffInfo from './usePortalBuffInfo';

const useStatInfo = (mapInfo: MapInfo) => {
  const expRate = useRecoilValue(totalExpRateSelector);
  const itemDropRate = useRecoilValue(totalItemDropRateSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropRateSelector);
  const [boosterRuneRate, setBoosterRuneRate] = useRecoilState(
    boosterRuneState(mapInfo.map_name),
  );
  const [eventSkillRuneRate, setEventSkillRate] = useRecoilState(
    eventSkillRuneState(mapInfo.map_name),
  );
  const [portalRate, setPortalRate] = useRecoilState(portalState);

  const { state, increment, decrement } = usePortalBuffInfo();

  const handleBoosterRuneRateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBoosterRuneRate(Number(event.target.value));
  };

  const handleEventSkillRuneRateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEventSkillRate(Number(event.target.value));
  };

  const handlePortalRateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPortalRate({
      ...portalRate,
      [event.target.name]: event.target.checked,
    });
  };

  const expInfo: StatTextItem = {
    label: '경험치 획득량',
    iconName: 'exp',
    value: expRate,
  };

  const burningFieldInfo: StatTextItem = {
    label: '버닝필드',
    iconName: 'burning',
    value: mapInfo.burning_field,
  };

  const itemDropInfo: StatTextItem = {
    label: '아이템 드롭률',
    iconName: 'drop',
    value: itemDropRate,
  };

  const mesoDropInfo: StatTextItem = {
    label: '메소 획득량',
    iconName: 'meso',
    value: mesoDropRate,
  };

  const boosterRuneInfo: StatRadioItem = {
    label: '룬',
    radios: [
      { label: '2x', value: 100 },
      { label: '3x', value: 200 },
    ],
    iconName: 'rune',
    value: boosterRuneRate,
    handleChange: handleBoosterRuneRateChange,
  };

  const eventSkillRuneInfo: StatRadioItem = {
    label: '룬',
    radios: [
      { label: '1x', value: 0 },
      { label: '2x', value: 100 },
    ],
    iconName: 'rune',
    value: eventSkillRuneRate,
    handleChange: handleEventSkillRuneRateChange,
  };

  const portalRuneRateInfo: StatCheckboxItem = {
    label: '룬',
    iconName: 'rune',
    checked: portalRate.rune,
    handleChange: handlePortalRateChange,
    value: 100,
  };

  const portalSundayEventRateInfo: StatCheckboxItem = {
    label: '선데이 메이플',
    iconName: 'sunday',
    checked: portalRate.sunday,
    handleChange: handlePortalRateChange,
    value: 300,
  };

  const portalEventBuffRateInfo: StatCountButtonItem = {
    label: EVENT_BUFF_STAT,
    iconName: 'buff',
    count: state.eventBuffLevel,
    increment,
    decrement,
    disableIncrement: 6,
    disableDecrement: 0,
    value: expByEventBuffLevel(state.eventBuffLevel),
  };

  return {
    expInfo,
    burningFieldInfo,
    itemDropInfo,
    mesoDropInfo,
    boosterRuneInfo,
    eventSkillRuneInfo,
    portalRuneRateInfo,
    portalSundayEventRateInfo,
    portalEventBuffRateInfo,
  };
};

export default useStatInfo;
