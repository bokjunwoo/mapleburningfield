import { atom, selector, selectorFamily } from 'recoil';

export const itemDropRateState = atom<SelectItem[]>({
  key: 'itemDropRateState',
  default: [],
});

export const itemDropRateSelector = selectorFamily({
  key: 'itemDropRateSelector',
  get:
    (rateName: string) =>
    ({ get }) => {
      const data = get(itemDropRateState);
      const selectedRate = data.find((rate) => rate.label === rateName);
      return selectedRate ? selectedRate.value.toLocaleString() : '';
    },
});

export const totalItemDropRateSelector = selector({
  key: 'totalItemDropRateSelector',
  get: ({ get }) => {
    const rates = get(itemDropRateState);
    return rates.reduce((total, rate) => total + rate.value, 0);
  },
});
