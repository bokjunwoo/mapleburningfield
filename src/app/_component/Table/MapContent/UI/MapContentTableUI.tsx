import { TableBody } from '@mui/material';
import TableUI from '../../common/TableUI';
import MapContentExpRewardRowUI from './MapContentExpRewardRowUI';
import MapContentHeadUI from './MapContentHeadUI';

type Props = {
  mapInfo: MapInfo;
  selcectThItems: SelectThItem[];
  mobContent: MobContent;
};

const MapContentTableUI = ({ mapInfo, selcectThItems, mobContent }: Props) => {
  return (
    <TableUI aria-label={`map_content_${mapInfo.map_name}_table`}>
      <MapContentHeadUI mobContent={mobContent} />

      <TableBody>
        {selcectThItems.map((th) => {
          return (
            <MapContentExpRewardRowUI
              key={th.label}
              mapInfo={mapInfo}
              th={th}
              mobContent={mobContent}
            />
          );
        })}
      </TableBody>
    </TableUI>
  );
};

export default MapContentTableUI;
