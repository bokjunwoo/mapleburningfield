import PlaceSortHeadUI from './UI/PlaceSortHeadUI';

type Props = {
  headCells: HeadCell[];
  order: 'asc' | 'desc';
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  orderBy: keyof HeadCellInfo;
  setOrderBy: React.Dispatch<React.SetStateAction<keyof HeadCellInfo>>;
};

const PlaceSortHead = ({
  headCells,
  order,
  setOrder,
  orderBy,
  setOrderBy,
}: Props) => {
  const handleSortRequest = (
    event: React.MouseEvent<unknown>,
    property: keyof HeadCellInfo,
  ) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const createSortHandler =
    (property: keyof HeadCellInfo) => (event: React.MouseEvent<unknown>) => {
      handleSortRequest(event, property);
    };

  return (
    <PlaceSortHeadUI
      headCells={headCells}
      orderBy={orderBy}
      order={order}
      createSortHandler={createSortHandler}
    />
  );
};

export default PlaceSortHead;
