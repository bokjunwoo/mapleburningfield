import {
  findEventSkillBuff,
  findGreedSkillMesoDropRate,
  findHolySymbolSkillExpRate,
  findHolySymbolSkillHyperPassiveRates,
  findShowDownSkillHyperPassiveRates,
  findShowDownSkillRates,
} from './skill';
import characterServiceInstance from '@/app/api/Service/ocid/CharacterService';

export const validateCharacterInfo = (data: CharacterInfoBase) => {
  if (data.character_level < 200) {
    throw new Error('캐릭터 레벨이 200 미만입니다.');
  }

  if (Number(data.character_class_level) < 5) {
    throw new Error('5차 전직을 완료하지 않은 캐릭터 입니다.');
  }
};

const getClassBishopRates = async (ocid: string) => {
  const threeGradeSkill = await characterServiceInstance.getSkill(ocid, '3');

  const holySymbolExpRate = findHolySymbolSkillExpRate(threeGradeSkill);

  if (holySymbolExpRate !== 0) {
    const hyperpassiveHolySymbol = await characterServiceInstance.getSkill(
      ocid,
      'hyperpassive',
    );

    const holySymbolSkillRates = findHolySymbolSkillHyperPassiveRates(
      hyperpassiveHolySymbol,
      holySymbolExpRate,
    );

    return holySymbolSkillRates;
  }

  return { expRate: holySymbolExpRate, itemDropRate: 0 };
};

const getClassNightLoadRates = async (ocid: string) => {
  const fourGradeSkill = await characterServiceInstance.getSkill(ocid, '4');

  const showDownRates = findShowDownSkillRates(fourGradeSkill);

  if (showDownRates.expRate !== 0 && showDownRates.itemDropRate !== 0) {
    const hyperpassiveShowDown = await characterServiceInstance.getSkill(
      ocid,
      'hyperpassive',
    );

    const hyperpassiveShowDownRates = findShowDownSkillHyperPassiveRates(
      hyperpassiveShowDown,
      showDownRates.expRate,
      showDownRates.itemDropRate,
    );

    return hyperpassiveShowDownRates;
  }

  return showDownRates;
};

const getClassShadowerMesoDropRate = async (ocid: string) => {
  const threeGradeSkill = await characterServiceInstance.getSkill(ocid, '3');

  const greedMesoDropRate = findGreedSkillMesoDropRate(threeGradeSkill);

  return greedMesoDropRate;
};

const getClassEventSkillBuff = async (ocid: string) => {
  const eventSkillBuff = await characterServiceInstance.getSkill(ocid, '0');

  const eventSkillBuffRates = findEventSkillBuff(eventSkillBuff);

  return eventSkillBuffRates;
};

export const getclasses = async (
  userOcid: string,
  characterClass: CharacterClass,
) => {
  let classBishop: SkillRates = { expRate: 0, itemDropRate: 0 };
  let classNightLoad: SkillRates = { expRate: 0, itemDropRate: 0 };
  let classShadower = 0;
  let eventBuff = {
    expAdditionalRate: 0,
    portalAdditionalExpRate: 0,
    araneRiverAdditionalExpRate: 0,
    grandisAdditionalExpRate: 0,
    monsterParkAdditionalExpRate: 0,
  };

  eventBuff = await getClassEventSkillBuff(userOcid);

  switch (characterClass) {
    case '비숍':
      classBishop = await getClassBishopRates(userOcid);
      break;
    case '나이트로드':
      classNightLoad = await getClassNightLoadRates(userOcid);
      break;
    case '섀도어':
      classShadower = await getClassShadowerMesoDropRate(userOcid);
      break;
    default:
      break;
  }

  return { classBishop, classNightLoad, classShadower, eventBuff };
};
