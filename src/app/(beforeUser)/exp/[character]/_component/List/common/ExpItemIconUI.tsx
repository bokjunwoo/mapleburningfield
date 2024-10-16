import { Avatar } from '@mui/material';

type Props = {
  region: string;
  folder: 'symbol_icon' | 'region_icon';
  warning?: boolean;
};

const ExpItemIconUI = ({ region, folder, warning = false }: Props) => {
  let image: string;

  if (folder === 'symbol_icon') {
    if (['문브릿지', '고통의미궁', '리멘'].includes(region)) {
      image = '염원의불꽃';
    } else {
      image = region;
    }
  } else {
    image = region;
  }

  if (warning) {
    return (
      <Avatar
        alt="Remy Sharp"
        variant="square"
        src={`/images/${folder}/${image}.png`}
        sx={{ width: 20, height: 20, mt: -1.2, mr: 0.5, ml: -0.5 }}
      />
    );
  }

  return (
    <Avatar
      alt="Remy Sharp"
      variant="square"
      src={`/images/${folder}/${image}.png`}
      sx={{
        width: 20,
        height: 20,
        mr: 0.5,
        ml: -0.5,
        mt:
          image === '상급 EXP 교환권' || image === '기본 EXP 교환권'
            ? 0.7
            : undefined,
      }}
    />
  );
};

export default ExpItemIconUI;
