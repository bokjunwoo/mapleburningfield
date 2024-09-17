import { Button } from '@mui/material';
import useLoadPreset from '@/app/hooks/useLoadPreset';

const PresetButtonUI = () => {
  const handleClick = useLoadPreset();

  return (
    <Button
      variant="outlined"
      disableRipple
      size="small"
      onClick={handleClick}
      sx={{ bgcolor: 'white' }}
    >
      프리셋 불러오기
    </Button>
  );
};

export default PresetButtonUI;
