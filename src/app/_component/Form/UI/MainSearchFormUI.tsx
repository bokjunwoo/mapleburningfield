'use client';

import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, IconButton, CircularProgress } from '@mui/material';
import { orange } from '@mui/material/colors';
import AlertUI from '../../Alret/AlretUI';
import useCharacterSearch from '@/app/hooks/useCharacterSearch';

type Props = {
  pathName: string;
};

const MainSearchFormUI = ({ pathName }: Props) => {
  const {
    value,
    onChange,
    alert,
    isLoading,
    handleAlertClose,
    handleSubmit,
    handleClick,
  } = useCharacterSearch(pathName);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      bgcolor="rgba(0, 0, 0, 0.7)"
      px={1.5}
      height={44}
      display="flex"
      alignItems="center"
      borderRadius={1}
      color="white"
      border={`1px solid ${orange[500]}`}
      onSubmit={handleSubmit}
    >
      <InputBase
        name="search"
        value={value}
        onChange={onChange}
        placeholder="캐릭터 닉네임을 입력하세요."
        inputProps={{
          'aria-label': 'search character',
          sx: { p: 0 },
        }}
        sx={{ width: 270, fontSize: 14, color: 'inherit' }}
      />

      {isLoading ? (
        <CircularProgress size={24} />
      ) : (
        <IconButton
          type="button"
          aria-label="search"
          sx={{ p: 0 }}
          disableRipple
          color="inherit"
          onClick={handleClick}
          disabled={alert.isError}
        >
          <SearchIcon />
        </IconButton>
      )}

      <AlertUI alert={alert} handleClose={handleAlertClose} />
    </Box>
  );
};

export default MainSearchFormUI;
