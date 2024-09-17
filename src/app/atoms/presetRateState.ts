import { atom, selectorFamily } from 'recoil';

export const presetExpRateState = atom<SelectItem[]>({
  key: 'presetExpRateState',
  default: [],
});

export const presetExpRateStateSelector = selectorFamily({
  key: 'presetExpRateStateSelector',
  get:
    (rateName: string) =>
    ({ get }) => {
      const data = get(presetExpRateState);
      const selectedRate = data.find((rate) => rate.label === rateName);
      return selectedRate ? selectedRate.value.toLocaleString() : '';
    },
});

export const presetMesoDropRateState = atom<SelectItem[]>({
  key: 'presetMesoDropRateState',
  default: [],
});

export const presetMesoDropRateStateSelector = selectorFamily({
  key: 'presetMesoDropRateStateSelector',
  get:
    (rateName: string) =>
    ({ get }) => {
      const data = get(presetMesoDropRateState);
      const selectedRate = data.find((rate) => rate.label === rateName);
      return selectedRate ? selectedRate.value.toLocaleString() : '';
    },
});

export const presetItemDropRateState = atom<SelectItem[]>({
  key: 'presetItemDropRateState',
  default: [],
});

export const presetItemDropRateStateSelector = selectorFamily({
  key: 'presetItemDropRateStateSelector',
  get:
    (rateName: string) =>
    ({ get }) => {
      const data = get(presetItemDropRateState);
      const selectedRate = data.find((rate) => rate.label === rateName);
      return selectedRate ? selectedRate.value.toLocaleString() : '';
    },
});
