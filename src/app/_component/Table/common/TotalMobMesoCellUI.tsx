import { Typography } from '@mui/material';
import { formatNumber } from '@/app/utils/format';

type Props = {
  pureMeso: number;
  bonusMeso: number;
};

const TotalMobMesoCellUI = ({ pureMeso, bonusMeso }: Props) => {
  return (
    <>
      <Typography component="span" variant="body2">
        {formatNumber(pureMeso)}
      </Typography>
      <Typography
        component="span"
        variant="body2"
        fontSize={12}
        color="GrayText"
      >
        (기본 메소)
      </Typography>
      <br />
      <Typography component="span" variant="body2">
        {formatNumber(bonusMeso)}
      </Typography>

      <Typography
        component="span"
        variant="body2"
        fontSize={12}
        color="GrayText"
      >
        (메획 메소)
      </Typography>
    </>
  );
};

export default TotalMobMesoCellUI;
