import { TableBody } from '@mui/material';
import { useRecoilValue } from 'recoil';
import TableCollapsibleRowUI from '../../common/TableCollapsibleRowUI';
import TableToggleButtonCellUI from '../../common/TableToggleButtonCellUI';
import PlaceCellUI from './PlaceCellUI';
import PlaceCollapseUI from '@/app/_component/Collapse/PlaceCollapseUI';
import characterLevelState from '@/app/atoms/characterLevelState';
import { REGION_COLOR } from '@/app/constants/color';
import useToggle from '@/app/hooks/useToggle';
import { selectedTimeInMinutes } from '@/app/utils/time';

type Props = {
  mapInfo: MapInfo;
  headCells: HeadCell[];
  selectedTime: string;
};

const PlaceTableSortBodyUI = ({ mapInfo, headCells, selectedTime }: Props) => {
  const { isToggled, toggle } = useToggle(false);

  const characterLevel = useRecoilValue(characterLevelState);

  const timeInMinutes = selectedTimeInMinutes(selectedTime);

  const { bgcolor } = REGION_COLOR[mapInfo.map_region];

  return (
    <TableBody>
      <TableCollapsibleRowUI hover={false} open={isToggled} bgcolor={bgcolor}>
        <TableToggleButtonCellUI isOpen={isToggled} toggleOpen={toggle} />

        {headCells.map((headCell) => (
          <PlaceCellUI
            key={headCell.id}
            mapInfo={mapInfo}
            headCell={headCell}
            characterLevel={characterLevel}
            timeInMinutes={timeInMinutes}
          />
        ))}
      </TableCollapsibleRowUI>

      <PlaceCollapseUI
        mapInfo={mapInfo}
        isOpen={isToggled}
        colSpan={headCells.length + 1}
      />
    </TableBody>
  );
};

export default PlaceTableSortBodyUI;
