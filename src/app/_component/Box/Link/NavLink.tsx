import { SnackbarCloseReason } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import NavLinkUI from './UI/NavLinkUI';
import { characterInfoState } from '@/app/atoms/characterInfoState';
import { errorMessageState } from '@/app/atoms/errorMessageState';

type Props = {
  pathname: string;
  value: string;
  text: string;
};

const NavLink = ({ pathname, value, text }: Props) => {
  const router = useRouter();
  const characterInfo = useRecoilValue(characterInfoState);
  const setErrorMessage = useSetRecoilState(errorMessageState);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (value.includes('/character/') || value.includes('/exp/')) {
      if (!characterInfo.character_name) {
        event.preventDefault();
        setErrorMessage('');
        router.push(value);
      }
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <NavLinkUI
      pathname={pathname}
      value={value}
      text={text}
      openSnackbar={openSnackbar}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
};

export default NavLink;
