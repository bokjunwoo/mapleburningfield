import { useRecoilValue } from 'recoil';
import EmptyTableRowCommon from '../common/EmptyTableDataRowUI';
import PlaceTableSortBodyUI from './UI/PlaceTableSortBodyUI';
import { burningFieldState } from '@/app/atoms/burningFieldState';
import characterLevelState from '@/app/atoms/characterLevelState';
import { totalExpRateSelector } from '@/app/atoms/expRateState';
import { totalItemDropRateSelector } from '@/app/atoms/itemDropState';
import { totalMesoDropRateSelector } from '@/app/atoms/mesoDropState';
import { regionListState } from '@/app/atoms/regionListState';
import { regionsSelector } from '@/app/atoms/regionState';
import { mapInfoToHeadCell, sortByKey } from '@/app/utils/table';

type Props = {
  headCells: HeadCell[];
  order: 'desc' | 'asc';
  orderBy: keyof HeadCellInfo;
  selectedTime: string;
};

const PlaceSortBody = ({ headCells, order, orderBy, selectedTime }: Props) => {
  const expRate = useRecoilValue(totalExpRateSelector);
  const itemDropRate = useRecoilValue(totalItemDropRateSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropRateSelector);
  const characterLevel = useRecoilValue(characterLevelState);
  const regionList = useRecoilValue(regionListState);
  const selectedRegion = useRecoilValue(regionsSelector(regionList));
  const burningField = useRecoilValue(burningFieldState);

  const updatedData: MapInfo[] = selectedRegion.map((mapInfo) => {
    const updatedBurningField = burningField.find(
      (v) => v.map_name === mapInfo.map_name,
    );
    const burningFieldValue = updatedBurningField
      ? updatedBurningField.burning_field
      : mapInfo.burning_field;

    return {
      ...mapInfoToHeadCell({
        mapInfo,
        characterLevel,
        expRate,
        itemDropRate,
        mesoDropRate,
        burningField: burningFieldValue,
      }),
    };
  });

  const sortedMapInfo: MapInfo[] =
    orderBy === 'map_name'
      ? updatedData
      : sortByKey(updatedData, orderBy as keyof HeadCellInfo, order);

  return (
    <>
      {selectedRegion.length === 0 ? (
        <EmptyTableRowCommon
          colSpan={headCells.length + 1}
          text="선택된 맵(지역)이 없습니다"
        />
      ) : (
        sortedMapInfo.map((mapInfo) => (
          <PlaceTableSortBodyUI
            key={mapInfo.map_name}
            mapInfo={mapInfo}
            headCells={headCells}
            selectedTime={selectedTime}
          />
        ))
      )}
    </>
  );
};

export default PlaceSortBody;
