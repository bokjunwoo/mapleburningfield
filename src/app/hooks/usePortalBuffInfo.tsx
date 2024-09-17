import { useRecoilState } from 'recoil';
import { portalState } from '../atoms/portalState';

const usePortalBuffInfo = () => {
  const [state, setState] = useRecoilState(portalState);

  const increment = () => {
    setState((prev) => ({
      ...prev,
      eventBuffLevel: prev.eventBuffLevel + 1,
    }));
  };

  const decrement = () => {
    setState((prev) => ({
      ...prev,
      eventBuffLevel: prev.eventBuffLevel - 1,
    }));
  };

  return {
    state,
    increment,
    decrement,
  };
};

export default usePortalBuffInfo;
