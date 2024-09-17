import { atom, selector, selectorFamily } from 'recoil';

export const expRateState = atom<SelectItem[]>({
  key: 'expRateState',
  default: [],
});

export const expRateSelector = selectorFamily({
  key: 'expRateSelector',
  get:
    (rateName: string) =>
    ({ get }) => {
      const data = get(expRateState);
      const selectedRate = data.find((rate) => rate.label === rateName);
      return selectedRate ? selectedRate.value.toLocaleString() : '';
    },
});

export const totalExpRateSelector = selector({
  key: 'totalExpRateSelector',
  get: ({ get }) => {
    const rates = get(expRateState);
    return rates.reduce((total, rate) => total + rate.value, 100);
  },
});

export const eventBuffExpContentState = atom<EventBuffExpContentRates>({
  key: 'eventBuffExpContentState',
  default: {
    araneRiverAdditionalExpRate: 0,
    grandisAdditionalExpRate: 0,
    monsterParkAdditionalExpRate: 0,
  },
});
