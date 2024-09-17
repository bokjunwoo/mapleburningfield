import { useState } from 'react';

const useToggle = (initialState: boolean = false) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const handleToggleOn = () => {
    setIsToggled(true);
  };

  const handleToggleOff = () => {
    setIsToggled(false);
  };

  const toggle = () => {
    setIsToggled((prevToggled) => !prevToggled);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsToggled(event.target.checked);
  };

  return { isToggled, handleToggleOn, handleToggleOff, toggle, handleChange };
};

export default useToggle;
