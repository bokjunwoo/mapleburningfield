import { atom, selectorFamily } from 'recoil';
import { map } from '../data/map';

export const regionState = atom<MapData>({
  key: 'mapState',
  default: map,
});

export const regionsSelector = selectorFamily({
  key: 'regionsSelector',
  get:
    (regions: (AraneRiverRegion | GrandisRegion)[]) =>
    ({ get }) => {
      const data = get(regionState);
      const selectedData = regions.flatMap((region) => data[region]);
      return selectedData;
    },
});
