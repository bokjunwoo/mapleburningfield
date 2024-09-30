import { REQUIRED_LEVEL_EXP } from '@/app/constants/level';
import { truncateToFixed } from '@/app/utils/format';
import { calculateExpPercentage } from '@/app/utils/mob';
import { TableRow, TableCell, Box, Avatar, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import Link from 'next/link';

type Props = {
  item: Ranking;
  previousItem: Ranking;
};

const RankTitleBodyUI = ({ item, previousItem }: Props) => {
  const todayExpPercentage = calculateExpPercentage(
    item.character_level,
    item.character_exp,
  );

  const calculateExpChangePercentage = () => {
    const levelDifference = item.character_level - previousItem.character_level;

    const calculateRemainingExpPercentage = (level: number, exp: number) => {
      const requiredExp = REQUIRED_LEVEL_EXP[level];
      return calculateExpPercentage(level, requiredExp - exp);
    };

    const remainingExpPercentage = calculateRemainingExpPercentage(
      previousItem.character_level,
      previousItem.character_exp,
    );
    const currentExpPercentage = calculateExpPercentage(
      item.character_level,
      item.character_exp,
    );

    if (levelDifference === 0) {
      const expDifference = item.character_exp - previousItem.character_exp;
      return calculateExpPercentage(item.character_level, expDifference);
    } else {
      const additionalPercentage =
        levelDifference > 1 ? levelDifference * 100 : 0;
      return (
        remainingExpPercentage + additionalPercentage + currentExpPercentage
      );
    }
  };

  const aaass = calculateExpChangePercentage();

  return (
    <TableRow hover>
      <TableCell align="center" sx={{ px: 1, fontWeight: 'bold' }}>
        {item.ranking}
      </TableCell>

      <TableCell align="left" sx={{ px: 1 }}>
        <Link href={`/exp/${item.character_name}`}>
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            sx={{
              ':hover': {
                textDecoration: 'underline', // 호버 시 줄 긋기
              },
            }}
          >
            <Avatar
              alt={item.world_name}
              src={`/images/world_icon/${item.world_name}.png`}
              variant="rounded"
              sx={{ width: 16, height: 16, mr: 0.5, mt: 0.2 }}
            />
            <Typography variant="body2" fontWeight={500}>
              {item.character_name}
            </Typography>
          </Box>
        </Link>
      </TableCell>

      <TableCell sx={{ px: 1 }}>
        <Box display="flex" justifyContent="left" alignItems="center">
          <Typography variant="body2" fontWeight={500} mr={0.3}>
            Lv.{item.character_level}
          </Typography>

          <Typography
            variant="body2"
            color="GrayText"
            fontSize={12}
            fontWeight={500}
          >
            ({truncateToFixed(todayExpPercentage, 3)}%)
          </Typography>
        </Box>
      </TableCell>

      <TableCell align="center" sx={{ px: 1 }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="body2" fontSize={10} color={red[500]} mx={0.5}>
            ▲
          </Typography>

          <Typography variant="body2" fontWeight={600} color={red[500]}>
            {`${truncateToFixed(aaass, 3)}%`}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default RankTitleBodyUI;
