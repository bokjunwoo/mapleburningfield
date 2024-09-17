import { useState } from 'react';

const useOptionSelect = (initialValue: string) => {
  const [selected, setSelected] = useState(initialValue);

  const handleOptionSelect = (value: string) => {
    setSelected(value);
  };

  return { selected, handleOptionSelect };
};

export default useOptionSelect;
