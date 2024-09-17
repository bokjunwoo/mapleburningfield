import CloseIcon from '@mui/icons-material/Close';
import { Collapse, Alert, IconButton } from '@mui/material';

type Props = {
  alert: Alret;
  handleClose: () => void;
  left?: string;
};

const AlertUI = ({ alert, handleClose, left = '50%' }: Props) => {
  return (
    <Collapse
      in={alert.isError}
      sx={{
        position: 'absolute',
        top: '60%',
        left: { left },
        transform: 'translate(-50%, -50%)',
        zIndex: 1300,
        mt: 1,
      }}
    >
      <Alert
        severity="error"
        action={
          <IconButton aria-label="close" size="small" onClick={handleClose}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2, textAlign: 'center' }}
      >
        {alert.message}
      </Alert>
    </Collapse>
  );
};

export default AlertUI;
