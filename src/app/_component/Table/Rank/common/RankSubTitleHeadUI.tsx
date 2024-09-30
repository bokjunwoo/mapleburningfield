'use client';

import {
  TableHead,
  TableRow,
  TableCell,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { red, yellow } from '@mui/material/colors';

const RankSubTitleHeadUI = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <TableHead sx={{ bgcolor: yellow[100] }}>
      <TableRow>
        <TableCell align="center" sx={{ px: 1, fontWeight: 500 }} width={40}>
          #
        </TableCell>

        <TableCell align="left" width={120} sx={{ px: 1, fontWeight: 500 }}>
          캐릭터
        </TableCell>

        <TableCell sx={{ px: 1 }}>
          <Box display="flex" justifyContent="left" pr={2.5}>
            <Typography variant="body2" fontWeight={500} mr={0.3}>
              레벨
            </Typography>
            <Typography
              variant="body2"
              fontWeight={500}
              fontSize={10}
              alignSelf="end"
              color="GrayText"
            >
              (경험치)
            </Typography>
          </Box>
        </TableCell>

        <TableCell sx={{ px: 1 }}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              '@media (max-width:500px)': {
                display: 'block',
              },
            }}
          >
            <Typography variant="body2" fontWeight={500} mr={0.3}>
              전날 대비
            </Typography>
            <Typography
              variant="body2"
              fontWeight={500}
              fontSize={10}
              alignSelf="end"
              color={red[900]}
            >
              (경험치 증가량)
            </Typography>
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default RankSubTitleHeadUI;
