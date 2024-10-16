import { useEffect, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import EXPCouponUI from './UI/EXPCouponUI';
import {
  expectedExpMultiplier,
  expectedExpRegionState,
} from '@/app/atoms/expectedExpState';
import { REGEX } from '@/app/constants/constants';
import { EXP_CONTENT } from '@/app/constants/rate';
import useValidatedInput from '@/app/hooks/useValidatedInput';
import { calculateEXPCoupon } from '@/app/utils/exp';

const EXPCoupon = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<EXPCouponRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.EXP_COUPON));

  const expMultiplier = useRecoilValue(
    expectedExpMultiplier(EXP_CONTENT.EXP_COUPON),
  );

  const { value: inputValue, handleChange: handleInputChange } =
    useValidatedInput(REGEX.NUMBER, 9999);

  const eventMapExp = calculateEXPCoupon(characterLevel);

  const expectedExpRegionList: ExpectedExpRegion<EXPCouponRegion>[] =
    useMemo(() => {
      if (characterLevel < 260) {
        return [
          {
            region: '기본 EXP 교환권',
            exp: eventMapExp.basicExp,
            count: inputValue,
            checked: expMultiplier === '기본 EXP',
            warning: false,
          },
          {
            region: '상급 EXP 교환권',
            exp: eventMapExp.advancedExp,
            count: inputValue,
            checked: expMultiplier === '상급 EXP',
            warning: false,
          },
        ];
      }
      return [
        {
          region: '상급 EXP 교환권',
          exp: eventMapExp.advancedExp,
          count: inputValue,
          checked: expMultiplier === '상급 EXP',
          warning: false,
        },
        {
          region: '기본 EXP 교환권',
          exp: eventMapExp.basicExp,
          count: inputValue,
          checked: expMultiplier === '기본 EXP',
          warning: false,
        },
      ];
    }, [characterLevel, eventMapExp, expMultiplier, inputValue]);

  useEffect(() => {
    setExpectedExpRegion(expectedExpRegionList);
  }, [expectedExpRegionList, setExpectedExpRegion]);

  return (
    <EXPCouponUI
      title={EXP_CONTENT.EXP_COUPON}
      characterLevel={characterLevel}
      inputValue={inputValue}
      handleInputChange={handleInputChange}
    />
  );
};

export default EXPCoupon;
