import { atom } from 'recoil';

const characterLevelState = atom<number>({
  key: 'characterLevelState',
  default: 260,
});

export default characterLevelState;
