import { Box, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import { extractWord, truncateToFixed } from '@/app/utils/format';
import { calculateExpPercentage } from '@/app/utils/mob';

type Props = {
  title: ExpContentTitle;
  characterLevel: number;
  exp: number;
};

const ExpDescriptionTextUI = ({ title, characterLevel, exp }: Props) => {
  const expPercentage = calculateExpPercentage(characterLevel, exp);

  return (
    <Box display="flex">
      <Typography color={orange[600]} variant="body2" mr={1}>
        [{title === '잠수맵(견습 로봇 놀이터)' ? title : extractWord(title, 0)}]
      </Typography>
      <Typography variant="body2">
        {truncateToFixed(expPercentage, 3)}%
      </Typography>
    </Box>
  );
};

export default ExpDescriptionTextUI;
