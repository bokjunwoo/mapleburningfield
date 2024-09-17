'use client';

import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, IconButton, CircularProgress } from '@mui/material';
import { grey } from '@mui/material/colors';
import AlertUI from '../../Alret/AlretUI';
import useCharacterSearch from '@/app/hooks/useCharacterSearch';

type Props = {
  pathName: string;
};

const HeaderSearchFormUI = ({ pathName }: Props) => {
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
      autoComplete="off"
      noValidate
      bgcolor="white"
      px={1.5}
      height={32}
      display="flex"
      alignItems="center"
      borderRadius={1}
      onSubmit={handleSubmit}
    >
      <InputBase
        name="search"
        value={value}
        onChange={onChange}
        placeholder="캐릭터 검색"
        inputProps={{ 'aria-label': 'search character', sx: { p: 0 } }}
        sx={{
          width: 130,
          fontSize: 12,
          '& .MuiInputBase-input::placeholder': {
            color: grey[700],
            opacity: 1,
          },
        }}
        disabled={alert.isError}
      />

      {isLoading ? (
        <CircularProgress size={24} />
      ) : (
        <IconButton
          type="button"
          aria-label="search"
          sx={{ p: 0 }}
          disableRipple
          onClick={handleClick}
        >
          <SearchIcon />
        </IconButton>
      )}

      <AlertUI alert={alert} handleClose={handleAlertClose} />
    </Box>
  );
};

export default HeaderSearchFormUI;
