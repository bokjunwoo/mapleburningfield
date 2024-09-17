import { atom, selectorFamily } from 'recoil';

export const regionListState = atom<(GrandisRegion | AraneRiverRegion)[]>({
  key: 'regionListState',
  default: [],
});

export const isAreaIncludedSelector = selectorFamily({
  key: 'isAreaIncludedSelector',
  get:
    (region: GrandisRegion | AraneRiverRegion) =>
    ({ get }) => {
      const data = get(regionListState);
      return data.includes(region);
    },
});
