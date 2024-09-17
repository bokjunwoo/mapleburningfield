import { useRouter } from 'next/navigation';
import { useState } from 'react';
import characterServiceInstance from '../api/Service/ocid/CharacterService';
import ocidServiceInstance from '../api/Service/ocid/OcidService';
import { REGEX } from '../constants/constants';
import { validateCharacterInfo } from '../utils/api/charater';
import { getErrorMessage } from '../utils/api/error';
import useErrorAlert from './useAlret';
import useInput from './useInput';

const useCharacterSearch = (pathName: string) => {
  const router = useRouter();
  const { value, onChange, reset } = useInput();
  const { alert, setAlert, handleAlertClose } = useErrorAlert();
  const [isLoading, setIsLoading] = useState(false);

  const handleApiRequest = async () => {
    if (!REGEX.CHARACTER_NAME.test(value)) {
      setAlert({
        isError: true,
        message: '올바른 닉네임을 입력해주세요.',
      });
      reset();
      return;
    }

    setIsLoading(true);

    try {
      const characterOcid = await ocidServiceInstance.getOcid(value);
      const { ocid } = characterOcid;

      const characterBaseInfo =
        await characterServiceInstance.getBaseInfo(ocid);
      validateCharacterInfo(characterBaseInfo);
      router.push(`/${pathName}/${value}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let errorMessage = '알 수 없는 오류가 발생했습니다.';

      if (err.response?.data?.error?.name) {
        const code = err.response.data.error.name;
        console.log('여기', err.response.data);
        errorMessage = getErrorMessage(code);
      }

      setAlert({ isError: true, message: errorMessage });
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleApiRequest();
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await handleApiRequest();
  };

  return {
    value,
    onChange,
    alert,
    isLoading,
    handleAlertClose,
    handleSubmit,
    handleClick,
  };
};

export default useCharacterSearch;
