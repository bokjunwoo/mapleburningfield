import { useState } from 'react';

const useErrorAlert = () => {
  const [alert, setAlert] = useState<Alret>({
    isError: false,
    message: '',
  });

  const handleAlertClose = () => {
    setAlert({
      ...alert,
      isError: false,
      message: '',
    });
  };

  return { alert, setAlert, handleAlertClose };
};

export default useErrorAlert;
