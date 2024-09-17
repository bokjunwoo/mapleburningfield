import { Snackbar, Alert, SnackbarCloseReason } from '@mui/material';

type Props = {
  openSnackbar: boolean;
  handleClose: (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => void;
  errorMessage?: string;
};

const SnackbarUI = ({ openSnackbar, handleClose, errorMessage }: Props) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={1000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity="warning" sx={{ width: '100%' }}>
        {errorMessage ||
          '캐릭터 정보가 없습니다. 캐릭터 닉네임을 입력해 주세요.'}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarUI;
