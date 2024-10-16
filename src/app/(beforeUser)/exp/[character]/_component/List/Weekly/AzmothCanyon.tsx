import { useEffect, useMemo, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import AzmothCanyonListUI from './UI/AzmothCanyonListUI';
import { expectedExpRegionState } from '@/app/atoms/expectedExpState';
import { REGEX } from '@/app/constants/constants';
import { EXP_CONTENT } from '@/app/constants/rate';
import {
  calculateAzmothCanyonBonusDiff,
  calculateAzmothCanyonExp,
} from '@/app/utils/exp';

const AzmothCanyon = ({ characterLevel }: CharacterLevelProps) => {
  const setExpectedExpRegion = useSetRecoilState<
    ExpectedExpRegion<AzmothCanyonRegion>[]
  >(expectedExpRegionState(EXP_CONTENT.AZMOTH_CANYON));

  const [sliderValue, setSliderValue] = useState(0);

  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (REGEX.NUMBER.test(newValue)) {
      const numericValue = Number(newValue);
      setInputValue(numericValue > 10000 ? 10000 : numericValue);
      setSliderValue(numericValue > 10000 ? 10000 : numericValue);
    }
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
    setInputValue(newValue as number);
  };

  const azmothCanyonExp = calculateAzmothCanyonExp(characterLevel);
  const azmothCanyonBonusDiff = calculateAzmothCanyonBonusDiff(inputValue);

  const expectedExpRegionList: ExpectedExpRegion<AzmothCanyonRegion>[] =
    useMemo(() => {
      return [
        {
          region: '경험치',
          exp: azmothCanyonExp,
          count: inputValue !== 0 ? inputValue + 5000 : 0,
          checked: sliderValue !== 0,
          warning: false,
        },
        {
          region: '아즈모스 코인',
          exp: 0,
          count: azmothCanyonBonusDiff.azmothCoin,
          checked: sliderValue !== 0,
          warning: false,
        },
        {
          region: '골드 주화',
          exp: 0,
          count: azmothCanyonBonusDiff.mapleGoldCoin,
          checked: sliderValue !== 0,
          warning: false,
        },
      ];
    }, [azmothCanyonBonusDiff, azmothCanyonExp, inputValue, sliderValue]);

  useEffect(() => {
    setExpectedExpRegion(expectedExpRegionList);
  }, [expectedExpRegionList, setExpectedExpRegion]);

  return (
    <AzmothCanyonListUI
      title={EXP_CONTENT.AZMOTH_CANYON}
      characterLevel={characterLevel}
      inputValue={inputValue}
      handleInputChange={handleInputChange}
      sliderValue={sliderValue}
      handleSliderChange={handleSliderChange}
    />
  );
};

export default AzmothCanyon;
