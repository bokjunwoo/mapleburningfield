import { atom, selector } from 'recoil';
import { expByEventBuffLevel } from '../utils/portal';

export const portalState = atom({
  key: 'portalState',
  default: {
    rune: false,
    sunday: false,
    eventBuffLevel: 0,
  },
});

export const runeExpRateSelector = selector({
  key: 'runeExpRateSelector',
  get: ({ get }) => {
    const state = get(portalState);
    const expRate = state.rune ? 100 : 0;
    return expRate;
  },
});

export const sundayEventExpRateSelector = selector({
  key: 'sundayEventExpRateSelector',
  get: ({ get }) => {
    const state = get(portalState);
    const expRate = state.sunday ? 200 : 0;
    return expRate;
  },
});

export const sundayEventExpEffectSelector = selector({
  key: 'sundayEventExpEffectSelector',
  get: ({ get }) => {
    const state = get(portalState);
    const expEffect = state.sunday ? 3 : 1;
    return expEffect;
  },
});

export const buffExpRateSelector = selector({
  key: 'buffExpRateSelector',
  get: ({ get }) => {
    const state = get(portalState);
    const skillLevel = expByEventBuffLevel(state.eventBuffLevel);
    return skillLevel;
  },
});
