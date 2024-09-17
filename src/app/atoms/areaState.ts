import { atom, selector } from 'recoil';
import { GRANDIS_AREA } from '../constants/constants';
import { ARANE_RIVER_REGIONS, GRANDIS_REGIONS } from '../constants/region';

export const areaState = atom<Area>({
  key: 'areaState',
  default: GRANDIS_AREA,
});

export const areaSelector = selector({
  key: 'areaSelector',
  get: ({ get }) => {
    const area = get(areaState);
    const regions =
      area === '아케인리버' ? ARANE_RIVER_REGIONS : GRANDIS_REGIONS;
    return regions;
  },
});
