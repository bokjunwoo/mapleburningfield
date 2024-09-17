import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import PresetRateList from '../List/Rate/PresetRateList';
import useLocalStorageToggle from '@/app/hooks/useLocalStorageToggle';

const RatePresetDialogUI = () => {
  const { isToggled, handleToggleOn, handleToggleOff } =
    useLocalStorageToggle(false);

  return (
    <Box>
      <Button
        variant="outlined"
        disableRipple
        onClick={handleToggleOn}
        size="small"
        sx={{ bgcolor: 'white' }}
      >
        프리셋 설정
      </Button>

      <Dialog
        open={isToggled}
        onClose={handleToggleOff}
        aria-labelledby="rate_preset_dialog_title"
        aria-describedby="rate_preset_dialog_description"
      >
        <DialogTitle id="rate_preset_dialog_title" fontSize={18}>
          프리셋 설정
        </DialogTitle>

        <DialogContent sx={{ pb: 0 }}>
          <DialogContentText
            id="alert-dialog-description"
            fontSize={12}
            height={30}
          >
            프리셋을 지정하여 매번 데이터를 입력하지 않고 가져옵니다.
          </DialogContentText>

          <PresetRateList />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleToggleOff}>저장</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RatePresetDialogUI;
