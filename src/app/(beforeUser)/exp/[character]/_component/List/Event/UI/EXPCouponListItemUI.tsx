import { Box } from '@mui/material';
import ExpItemIconUI from '../../common/ExpItemIconUI';
import ExpListItemUI from '../../common/ExpListItemUI';
import EXPCouponItemTextUI from './EXPCouponItemTextUI';
import { EXP_COUPON_MIN_REGIONS_LEVEL } from '@/app/constants/exp/weekly';

type Props = {
  item: ExpectedExpRegion<EXPCouponRegion>;
  characterLevel: number;
};

const EXPCouponListItemUI = ({ item, characterLevel }: Props) => {
  const isObtainable =
    characterLevel >= EXP_COUPON_MIN_REGIONS_LEVEL[item.region];

  return (
    <ExpListItemUI isCheck={item.checked} isObtainable={isObtainable}>
      <Box ml={1}>
        <ExpItemIconUI region={item.region} folder="region_icon" />
      </Box>

      <EXPCouponItemTextUI
        item={item}
        characterLevel={characterLevel}
        isObtainable={isObtainable}
      />
    </ExpListItemUI>
  );
};

export default EXPCouponListItemUI;
