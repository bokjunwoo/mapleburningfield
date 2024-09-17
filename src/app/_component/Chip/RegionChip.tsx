import { useRecoilValue, useSetRecoilState } from 'recoil';
import RegionChipUI from './UI/RegionChipUI';
import characterLevelState from '@/app/atoms/characterLevelState';
import {
  regionListState,
  isAreaIncludedSelector,
} from '@/app/atoms/regionListState';
import { isAreaAccessible } from '@/app/utils/helper';

type Props = {
  region: GrandisRegion | AraneRiverRegion;
};

const RegionChip = ({ region }: Props) => {
  const characterLevel = useRecoilValue(characterLevelState);
  const isSelected = useRecoilValue(isAreaIncludedSelector(region));
  const setRegionList = useSetRecoilState(regionListState);

  const toggleSelectedValue = () => {
    setRegionList((prev) => {
      if (isSelected) {
        return prev.filter((value) => value !== region);
      }
      return [...prev, region];
    });
  };

  const isAccessible = isAreaAccessible(region, characterLevel);

  return (
    <RegionChipUI
      value={region}
      isSelected={isSelected}
      onToggle={toggleSelectedValue}
      isAccessible={isAccessible}
    />
  );
};

export default RegionChip;
