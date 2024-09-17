import { atom, atomFamily, selectorFamily } from 'recoil';
import { calculateExpectedTotalExp } from '../utils/exp';

export const expectedExpRegionState = atomFamily<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ExpectedExpRegion<any>[],
  ExpContentTitle
>({
  key: 'expectedExpRegionState',
  default: [],
});

export const expectedExpMultiplier = atomFamily<string, ExpContentTitle>({
  key: 'expectedExpMultiplier',
  default: '0',
});

export const expectedExpState = atom<SelectItem[]>({
  key: 'expectedExpState',
  default: [],
});

export const totalExpectedExpSelector = selectorFamily({
  key: 'totalExpectedExpSelector',
  get:
    (contentTitle: ExpContentTitle) =>
    ({ get }) => {
      const data = get(expectedExpRegionState(contentTitle));
      const totalExp = calculateExpectedTotalExp(data);
      return totalExp;
    },
});
