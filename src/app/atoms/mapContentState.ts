import { atomFamily } from 'recoil';
import { BOOSTER } from '../constants/contents';

export const boosterMobKillState = atomFamily({
  key: 'boosterMobKillState',
  default: BOOSTER.INITIAL_MOB_KILL,
});

export const boosterRuneState = atomFamily({
  key: 'boosterRuneState',
  default: 100,
});

export const eventSkillRuneState = atomFamily({
  key: 'eventSkillRuneState',
  default: 0,
});
