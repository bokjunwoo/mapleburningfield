import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { expectedExpRegionState } from '../atoms/expectedExpState';

type Props<T extends string | null> = {
  title: ExpContentTitle;
  initialSelected: T;
};

const useSingleSelectCheckbox = <T extends string | null>({
  title,
  initialSelected,
}: Props<T>) => {
  const [expectedExpRegion, setExpectedExpRegion] = useRecoilState(
    expectedExpRegionState(title),
  );
  const [selected, setSelected] = useState<T | null>(initialSelected);

  useEffect(() => {
    const regionData = expectedExpRegion.find(
      (item) => item.region === initialSelected,
    );
    if (regionData) {
      setSelected(regionData.region as T);
    }
  }, [expectedExpRegion, initialSelected]);

  const handleCheckboxChange = (checkboxId: T) => {
    const newSelected = selected === checkboxId ? null : checkboxId;

    setSelected(newSelected);

    setExpectedExpRegion((prevState) => {
      const updatedState = prevState.map((item) => ({
        ...item,
        checked: item.region === checkboxId ? newSelected !== null : false,
      }));

      return updatedState;
    });
  };

  return {
    selected,
    handleCheckboxChange,
  };
};

export default useSingleSelectCheckbox;
