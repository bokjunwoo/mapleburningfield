import { SelectChangeEvent } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import SelcetCellUI from './UI/SelcetCellUI';
import {
  burningFieldState,
  burningFieldValueSelector,
} from '@/app/atoms/burningFieldState';

const BurningFieldSelect = ({ mapInfo }: MapInfoProps) => {
  const burningField = useRecoilValue(
    burningFieldValueSelector(mapInfo.map_name),
  );
  const setBurningField = useSetRecoilState(burningFieldState);

  const handleChange = (event: SelectChangeEvent) => {
    const targetValue = Number(event.target.value);
    setBurningField((prevBurningField) => {
      const existingItemIndex = prevBurningField.findIndex(
        (value) => value.map_name === mapInfo.map_name,
      );
      if (existingItemIndex !== -1) {
        return prevBurningField.map((item, index) =>
          index === existingItemIndex
            ? { ...item, burning_field: targetValue }
            : item,
        );
      }
      return [
        ...prevBurningField,
        { map_name: mapInfo.map_name, burning_field: targetValue },
      ];
    });
  };

  const menuItem: SelectMenuItem = {
    key: 'burning_field_select',
    label: '버닝',
    items: Array.from({ length: 11 }, (_, index) => ({
      value: index * 10,
      label: String(index),
    })),
  };

  return (
    <SelcetCellUI
      menuItem={menuItem}
      selectedValue={burningField}
      handleChange={handleChange}
    />
  );
};

export default BurningFieldSelect;
