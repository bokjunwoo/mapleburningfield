import PortalTableUI from './UI/PortalTableUI';
import {
  PORTAL_EXP_MULTIPLIER,
  PORTAL_INITIAL_TIME,
} from '@/app/constants/portal';
import useCounter from '@/app/hooks/useCounter';
import useNumberSelect from '@/app/hooks/useNumberSelect';

const PortalPrittoTable = ({ mapInfo }: MapInfoProps) => {
  const portalTime = {
    dragonEggStealing: useCounter(PORTAL_INITIAL_TIME.DRAGON_EGG_STEALING),
    courtshipDance: useCounter(PORTAL_INITIAL_TIME.COURTSHIP_DANCE),
    eagleHunting: useCounter(PORTAL_INITIAL_TIME.EAGLE_HUNTING),
  };

  const [dragonEggStealingExpMultiplier, handleDragonEggStealingChange] =
    useNumberSelect(PORTAL_EXP_MULTIPLIER.DRAGON_EGG_STEALING);
  const [eagleHuntingExpMultiplier, handleEagleHuntingChange] = useNumberSelect(
    PORTAL_EXP_MULTIPLIER.EAGLE_HUNTING,
  );

  const dragonEggStealingItem = [
    { label: '1단계 (EXP x 240)', value: 240 },
    { label: '2단계 (EXP x 480)', value: 480 },
    { label: '3단계 (EXP x 720)', value: 720 },
    { label: '4단계 (EXP x 1200)', value: 1200 },
    { label: '5단계 (EXP x 1680)', value: 1680 },
    { label: '완주 (EXP x 2400)', value: 2400 },
  ];

  const eagleHuntingItem = [
    { label: '0 ~ 300점 (EXP x 240)', value: 240 },
    { label: '350 ~ 600점 (EXP x 480)', value: 480 },
    { label: '650 ~ 950점 (EXP x 720)', value: 720 },
    { label: '1000점 (EXP x 1200)', value: 1200 },
  ];

  const portalContent: PortalContent = {
    type: 'Pritto',
    cells: [
      {
        type: 'Pritto',
        label: '드래곤의 알',
        expMultiplier: dragonEggStealingExpMultiplier,
        initialCount: PORTAL_INITIAL_TIME.DRAGON_EGG_STEALING,
        count: portalTime.dragonEggStealing.count,
        increment: portalTime.dragonEggStealing.increment,
        decrement: portalTime.dragonEggStealing.decrement,
        menuItem: dragonEggStealingItem,
        expMultiplierChange: handleDragonEggStealingChange,
      },
      {
        type: 'Pritto',
        label: '구애의 춤',
        expMultiplier: PORTAL_EXP_MULTIPLIER.COURTSHIP_DANCE,
        initialCount: PORTAL_INITIAL_TIME.COURTSHIP_DANCE,
        count: portalTime.courtshipDance.count,
        increment: portalTime.courtshipDance.increment,
        decrement: portalTime.courtshipDance.decrement,
        menuText: '10단계 (EXP x 1200)',
      },
      {
        type: 'Pritto',
        label: '독수리 사냥',
        expMultiplier: eagleHuntingExpMultiplier,
        initialCount: PORTAL_INITIAL_TIME.EAGLE_HUNTING,
        count: portalTime.eagleHunting.count,
        increment: portalTime.eagleHunting.increment,
        decrement: portalTime.eagleHunting.decrement,
        menuItem: eagleHuntingItem,
        expMultiplierChange: handleEagleHuntingChange,
      },
    ],
  };

  return <PortalTableUI mapInfo={mapInfo} portalContent={portalContent} />;
};

export default PortalPrittoTable;
