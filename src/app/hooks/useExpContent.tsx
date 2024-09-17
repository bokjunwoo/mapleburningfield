import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { expectedExpRegionState } from '../atoms/expectedExpState';
import useCounter from './useCounter';

type Props<T> = {
  title: ExpContentTitle;
  region: T;
  initialChecked: boolean;
  initialCount: number;
};

const useExpContent = <T,>({
  title,
  region,
  initialChecked,
  initialCount,
}: Props<T>) => {
  const [expectedExpRegion, setExpectedExpRegion] = useRecoilState(
    expectedExpRegionState(title),
  );

  const { count, increment, decrement } = useCounter(initialCount);

  const [isChecked, setChecked] = useState<boolean>(initialChecked);

  useEffect(() => {
    const regionData = expectedExpRegion.find((item) => item.region === region);
    if (regionData) {
      setChecked(regionData.checked);
    }
  }, [expectedExpRegion, region]);

  useEffect(() => {
    setExpectedExpRegion((prevState) =>
      prevState.map((item) =>
        item.region === region ? { ...item, count } : item,
      ),
    );
  }, [count, region, setExpectedExpRegion]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setChecked(checked);

    setExpectedExpRegion((prevState) =>
      prevState.map((item) =>
        item.region === region ? { ...item, checked } : item,
      ),
    );
  };

  return {
    count,
    increment,
    decrement,
    isChecked,
    handleCheckboxChange,
  };
};

export default useExpContent;
