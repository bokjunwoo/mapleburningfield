import React, { useState, ChangeEvent, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import CharacterLevelInputUI from './UI/CharacterLevelInputUI';
import characterLevelState from '@/app/atoms/characterLevelState';
import { regionListState } from '@/app/atoms/regionListState';
import { REGEX, LEVEL_RANGE } from '@/app/constants/constants';
import { ALL_REGIONS } from '@/app/constants/region';
import { findNearestQuestRegion } from '@/app/utils/exp';

const CharacterLevelInput = () => {
  const [characterLevel, setCharacterLevel] =
    useRecoilState(characterLevelState);

  const setRegionList = useSetRecoilState(regionListState);

  const [inputValue, setInputValue] = useState(characterLevel);
  const [error, setError] = useState(false);

  const nearestRegion = findNearestQuestRegion(characterLevel, ALL_REGIONS);

  const handleLevelValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputLevel = Number(event.target.value);
    const isValidInput = REGEX.NUMBER_UP_TO_THREE_DIGITS_REGEX.test(
      inputLevel.toString(),
    );

    if (inputLevel > 300) {
      setInputValue(300);
      return;
    }

    if (!isValidInput) {
      return;
    }

    setInputValue(inputLevel);
    setRegionList([]);
    setError(inputLevel < LEVEL_RANGE.MIN || inputLevel > LEVEL_RANGE.MAX);
  };

  const handleBlur = () => {
    if (inputValue < LEVEL_RANGE.MIN || inputValue > LEVEL_RANGE.MAX) {
      setError(true);
    } else if (inputValue === characterLevel) {
      setCharacterLevel(inputValue);
      setRegionList([nearestRegion]);
    } else {
      setCharacterLevel(inputValue);
      setError(false);
      setRegionList([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  useEffect(() => {
    setInputValue(characterLevel);
  }, [characterLevel]);

  useEffect(() => {
    if (characterLevel < LEVEL_RANGE.MIN || characterLevel > LEVEL_RANGE.MAX) {
      setError(false);
    }
    setRegionList([nearestRegion]);
  }, [characterLevel, nearestRegion, setRegionList]);

  return (
    <CharacterLevelInputUI
      error={error}
      handleLevelValueChange={handleLevelValueChange}
      handleBlur={handleBlur}
      handleKeyDown={handleKeyDown}
      inputValue={inputValue}
    />
  );
};

export default CharacterLevelInput;
