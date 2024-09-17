import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import TableUI from '../../common/TableUI';
import MobCalculateCellUI from './MobCalculateCellUI';
import { MOB_CALCULATE_TIME_OPTIONS } from '@/app/constants/time';

type Porps = {
  headCells: MobCalculateHeadCell[];
  mobKills: number;
  characterLevel: number;
  expReward: number;
  mesoReward: MobMeso;
};

const MobCalculateTableUI = ({
  headCells,
  mobKills,
  characterLevel,
  expReward,
  mesoReward,
}: Porps) => {
  return (
    <TableUI aria-label="mob_calculate_table">
      <TableHead sx={{ bgcolor: grey[400] }}>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.label} sx={{ p: 1.3 }} align="center">
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {MOB_CALCULATE_TIME_OPTIONS.map((option, timeIndex) => (
          <TableRow
            key={MOB_CALCULATE_TIME_OPTIONS[timeIndex].label}
            sx={timeIndex === 0 ? { bgcolor: yellow[100] } : {}}
          >
            {headCells.map((headCell) => (
              <MobCalculateCellUI
                key={headCell.label}
                headCell={headCell}
                timeOption={option}
                characterLevel={characterLevel}
                mobKills={mobKills}
                expReward={expReward}
                mesoReward={mesoReward}
              />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableUI>
  );
};

export default MobCalculateTableUI;
