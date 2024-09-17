import { atom, selector, selectorFamily } from 'recoil';
import { RATE_NAME } from '../constants/rate';

export const mesoDropRateState = atom<SelectItem[]>({
  key: 'mesoDropRateState',
  default: [],
});

export const mesoDropRateSelector = selectorFamily({
  key: 'mesoDropRateSelector',
  get:
    (rateName: string) =>
    ({ get }) => {
      const data = get(mesoDropRateState);
      const selectedRate = data.find((rate) => rate.label === rateName);
      return selectedRate ? selectedRate.value.toLocaleString() : '';
    },
});

export const totalMesoDropRateSelector = selector({
  key: 'totalMesoDropRateSelector',
  get: ({ get }) => {
    const mesoDropRate = get(mesoDropRateState);
    const potionRate = mesoDropRate.find(
      (rate) => rate.label === RATE_NAME.WEALTH_ACQUISITION_POTION,
    );

    if (potionRate?.value !== 0 && potionRate) {
      const totalMesoDropRate = mesoDropRate.reduce(
        (total, rate) => total + rate.value,
        0,
      );
      const applyMultiplicationPotion = Math.floor(
        (100 + totalMesoDropRate - 20) * 1.2 - 100 - totalMesoDropRate,
      );

      return totalMesoDropRate + applyMultiplicationPotion;
    }

    return mesoDropRate.reduce((total, rate) => total + rate.value, 0);
  },
});
