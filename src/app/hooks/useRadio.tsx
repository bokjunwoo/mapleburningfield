import { useRecoilState } from 'recoil';
import { expectedExpMultiplier } from '../atoms/expectedExpState';

const useRadio = (title: ExpContentTitle) => {
  const [value, setValue] = useRecoilState(expectedExpMultiplier(title));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, handleChange] as const;
};

export default useRadio;
