import { Checkbox } from '@mui/material';

type Props<T> = {
  region: T;
  selected: T | null;
  handleChange: (checkboxId: T) => void;
};

const ExpSelectCheckboxUI = <T extends string | null>({
  region,
  selected,
  handleChange,
}: Props<T>) => {
  return (
    <Checkbox
      checked={selected === region}
      onChange={() => handleChange(region)}
      disableRipple
      inputProps={{ 'aria-label': `${region}_checkbox` }}
      size="small"
      color="primary"
      sx={{
        ml: -1,
      }}
    />
  );
};

export default ExpSelectCheckboxUI;
