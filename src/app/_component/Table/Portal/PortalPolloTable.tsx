import PortalTableUI from './UI/PortalTableUI';
import {
  PORTAL_EXP_MULTIPLIER,
  PORTAL_INITIAL_TIME,
} from '@/app/constants/portal';
import useCounter from '@/app/hooks/useCounter';

const PortalPolloTable = ({ mapInfo }: MapInfoProps) => {
  const portalTime = {
    castleGates: useCounter(PORTAL_INITIAL_TIME.CASTLE_GATES),
    bountyHunting: useCounter(PORTAL_INITIAL_TIME.BOUNTY_HUNTING),
    stormwing: useCounter(PORTAL_INITIAL_TIME.STORMWING),
  };

  const portalContent: PortalContent = {
    type: 'Pollo',
    cells: [
      {
        type: 'Pollo',
        label: '성벽 지키기',
        expMultiplier: PORTAL_EXP_MULTIPLIER.CASTLE_GATES,
        initialCount: PORTAL_INITIAL_TIME.CASTLE_GATES,
        count: portalTime.castleGates.count,
        increment: portalTime.castleGates.increment,
        decrement: portalTime.castleGates.decrement,
      },
      {
        type: 'Pollo',
        label: '현상금 사냥',
        expMultiplier: PORTAL_EXP_MULTIPLIER.BOUNTY_HUNTING,
        initialCount: PORTAL_INITIAL_TIME.BOUNTY_HUNTING,
        count: portalTime.bountyHunting.count,
        increment: portalTime.bountyHunting.increment,
        decrement: portalTime.bountyHunting.decrement,
      },
      {
        type: 'Pollo',
        label: '스톰윙',
        expMultiplier: PORTAL_EXP_MULTIPLIER.STORMWING,
        initialCount: PORTAL_INITIAL_TIME.STORMWING,
        count: portalTime.stormwing.count,
        increment: portalTime.stormwing.increment,
        decrement: portalTime.stormwing.decrement,
      },
    ],
  };

  return <PortalTableUI mapInfo={mapInfo} portalContent={portalContent} />;
};

export default PortalPolloTable;
