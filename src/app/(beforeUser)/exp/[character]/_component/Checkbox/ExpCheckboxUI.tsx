import Checkbox from '@mui/material/Checkbox';

type Props<T> = {
  region: T;
  isChecked: boolean;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  warning?: boolean;
};

const ExpCheckboxUI = <T,>({
  region,
  isChecked,
  handleCheckboxChange,
  warning = false,
}: Props<T>) => {
  return (
    <Checkbox
      checked={isChecked}
      onChange={handleCheckboxChange}
      disableRipple
      inputProps={{ 'aria-label': `${region}_checkbox` }}
      size="small"
      color={warning ? 'error' : 'primary'}
      sx={{
        ml: -1.5,
        mt: warning ? -1.3 : 0,
      }}
    />
  );
};

export default ExpCheckboxUI;
