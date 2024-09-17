import { useState } from 'react';

const useTab = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return { value, handleChange };
};

export default useTab;
