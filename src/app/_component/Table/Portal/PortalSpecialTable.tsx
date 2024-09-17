import { useRecoilValue } from 'recoil';
import PortalTableUI from './UI/PortalTableUI';
import characterLevelState from '@/app/atoms/characterLevelState';
import {
  PORTAL_EXP_MULTIPLIER,
  PORTAL_INITIAL_TIME,
} from '@/app/constants/portal';
import useCounter from '@/app/hooks/useCounter';
import useNumberSelect from '@/app/hooks/useNumberSelect';

const PortalSpecialTable = ({ mapInfo }: MapInfoProps) => {
  const characterLevel = useRecoilValue(characterLevelState);

  const portalTime = {
    totemSlash: useCounter(PORTAL_INITIAL_TIME.TOTEM_SLASH),
    infernoWolf: useCounter(PORTAL_INITIAL_TIME.INFERNO_WOLF),
  };

  const [infernoWolfExtremeExpMultiplier, handleInfernoWolfExtremeChange] =
    useNumberSelect(PORTAL_EXP_MULTIPLIER.INFERNO_WOLF_EXTREME);
  const [infernoWolfChaosExpMultiplier, handleInfernoWolfChaosChange] =
    useNumberSelect(PORTAL_EXP_MULTIPLIER.INFERNO_WOLF_CHAOS);

  const wolfSettings = {
    extreme: {
      mode: '익스트림',
      expMultiplier: infernoWolfExtremeExpMultiplier,
      menuItem: [
        { label: '적당한 (EXP x 800)', value: 800 },
        { label: '상당한 (EXP x 1500)', value: 1500 },
        { label: '치명적인 (EXP x 1600)', value: 1600 },
        { label: '처치 (EXP x 1700)', value: 1700 },
      ],
      expMultiplierChange: handleInfernoWolfExtremeChange,
    },
    chaos: {
      mode: '카오스',
      expMultiplier: infernoWolfChaosExpMultiplier,
      menuItem: [
        { label: '적당한 (EXP x 600)', value: 600 },
        { label: '상당한 (EXP x 1100)', value: 1100 },
        { label: '치명적인 (EXP x 1200)', value: 1200 },
        { label: '처치 (EXP x 1300)', value: 1300 },
      ],
      expMultiplierChange: handleInfernoWolfChaosChange,
    },
  };

  const getWolfSettings = (level: number) =>
    level >= 260 ? wolfSettings.extreme : wolfSettings.chaos;

  const { mode, expMultiplier, menuItem, expMultiplierChange } =
    getWolfSettings(characterLevel);

  const portalContent: PortalContent = {
    type: 'Pritto',
    cells: [
      {
        type: 'Pritto',
        label: '에스페시아',
        expMultiplier: PORTAL_EXP_MULTIPLIER.TOTEM_SLASH,
        initialCount: PORTAL_INITIAL_TIME.TOTEM_SLASH,
        count: portalTime.totemSlash.count,
        increment: portalTime.totemSlash.increment,
        decrement: portalTime.totemSlash.decrement,
        menuText: '-',
      },
      {
        type: 'Pritto',
        label: `불꽃늑대(${mode})`,
        expMultiplier,
        initialCount: PORTAL_INITIAL_TIME.INFERNO_WOLF,
        count: portalTime.infernoWolf.count,
        increment: portalTime.infernoWolf.increment,
        decrement: portalTime.infernoWolf.decrement,
        menuItem,
        expMultiplierChange,
      },
    ],
  };

  return <PortalTableUI mapInfo={mapInfo} portalContent={portalContent} />;
};

export default PortalSpecialTable;
