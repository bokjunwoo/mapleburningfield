import { atom, selectorFamily } from 'recoil';

type BurningFieldItem = {
  map_name: string;
  burning_field: number;
};

export const burningFieldState = atom<BurningFieldItem[]>({
  key: 'burningFieldState',
  default: [],
});

export const burningFieldValueSelector = selectorFamily({
  key: 'burningFieldValueSelector',
  get:
    (mapName: string) =>
    ({ get }) => {
      const data = get(burningFieldState);
      const burningFieldItem = data.find((item) => item.map_name === mapName);
      return burningFieldItem ? burningFieldItem.burning_field : 0;
    },
});
