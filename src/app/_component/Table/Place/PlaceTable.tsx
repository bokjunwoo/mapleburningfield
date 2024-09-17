import { useState } from 'react';
import TableUI from '../common/TableUI';
import PlaceSortBody from './PlaceSortBody';
import PlaceSortHead from './PlaceSortHead';
import { generateHeadCells } from '@/app/utils/table';

type Props = {
  selectedTime: string;
};

const PlaceTable = ({ selectedTime }: Props) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [orderBy, setOrderBy] = useState<keyof HeadCellInfo>('map_name');

  const headCells = generateHeadCells(selectedTime);

  return (
    <TableUI aria-label="place_table" showBorder={false}>
      <PlaceSortHead
        headCells={headCells}
        order={order}
        setOrder={setOrder}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />

      <PlaceSortBody
        headCells={headCells}
        order={order}
        orderBy={orderBy}
        selectedTime={selectedTime}
      />
    </TableUI>
  );
};

export default PlaceTable;
