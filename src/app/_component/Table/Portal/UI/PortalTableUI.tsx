import { TableBody, TableHead } from '@mui/material';
import { grey } from '@mui/material/colors';
import TableHeadRowUI from '../../common/TableHeadRowUI';
import TableUI from '../../common/TableUI';
import PortalCountRowUI from './PortalCountCellUI';
import PortalExpRewardRowUI from './PortalExpRewardRowUI';
import PortalExpSettingRowUI from './PortalExpSettingRowUI';
import PortalHuntEfficiencyRowUI from './PortalHuntEfficiencyRowUI';

type Props = {
  mapInfo: MapInfo;
  portalContent: PortalContent;
};

const PortalTableUI = ({ mapInfo, portalContent }: Props) => {
  return (
    <TableUI aria-label={`portal_${mapInfo.map_name}_table`}>
      <TableHead sx={{ bgcolor: grey[500] }}>
        <TableHeadRowUI cells={portalContent.cells} />
      </TableHead>

      <TableBody>
        {portalContent.type === 'Pritto' && (
          <PortalExpSettingRowUI cells={portalContent.cells} />
        )}
        <PortalCountRowUI cells={portalContent.cells} />

        <PortalExpRewardRowUI mapInfo={mapInfo} cells={portalContent.cells} />

        <PortalHuntEfficiencyRowUI
          mapInfo={mapInfo}
          cells={portalContent.cells}
        />
      </TableBody>
    </TableUI>
  );
};

export default PortalTableUI;
