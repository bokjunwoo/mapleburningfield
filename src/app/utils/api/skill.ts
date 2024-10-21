import { extractValue } from '../format';
import { EVENT_BUFF_SKILL_NAME } from '@/app/constants/skill';

export const findHolySymbolSkillExpRate = (data: CharacterSkill) => {
  const holySymbolSkill = data.character_skill.find(
    (skill) => skill.skill_name === '홀리 심볼' && skill.skill_level === 20,
  );

  return holySymbolSkill ? 50 : 0;
};

export const findHolySymbolSkillHyperPassiveRates = (
  data: CharacterSkill,
  baseExpRate: number,
) => {
  const holySymbolSkill = data.character_skill.find(
    (skill) =>
      skill.skill_name === '홀리 심볼-익스피리언스' && skill.skill_level > 0,
  );

  const extraDropSkill = data.character_skill.find(
    (skill) =>
      skill.skill_name === '홀리 심볼-엑스트라 드롭' && skill.skill_level > 0,
  );

  const expRate = holySymbolSkill ? baseExpRate + 20 : baseExpRate;
  const itemDropRate = extraDropSkill ? 30 : 0;

  return { expRate, itemDropRate };
};

export const findGreedSkillMesoDropRate = (data: CharacterSkill) => {
  const greedSkill = data.character_skill.find(
    (skill) => skill.skill_name === '그리드' && skill.skill_level > 0,
  );

  return greedSkill ? 20 : 0;
};

export const findShowDownSkillRates = (data: CharacterSkill) => {
  const showDownSkill = data.character_skill.find(
    (skill) => skill.skill_name === '쇼다운 챌린지' && skill.skill_level >= 30,
  );

  return showDownSkill
    ? { expRate: 5, itemDropRate: 5 }
    : { expRate: 0, itemDropRate: 0 };
};

export const findShowDownSkillHyperPassiveRates = (
  data: CharacterSkill,
  baseExpRate: number,
  baseItemDropRate: number,
) => {
  const showDownEnhanceSkill = data.character_skill.find(
    (skill) =>
      skill.skill_name === '쇼다운 챌린지-인핸스' && skill.skill_level > 0,
  );

  const expRate = showDownEnhanceSkill ? baseExpRate + 5 : baseExpRate;
  const itemDropRate = showDownEnhanceSkill
    ? baseItemDropRate + 5
    : baseItemDropRate;

  return { expRate, itemDropRate };
};

export const findEventSkillBuff = (data: CharacterSkill) => {
  const eventSkill = data.character_skill.find(
    (skill) =>
      skill.skill_name === EVENT_BUFF_SKILL_NAME && skill.skill_level > 0,
  );

  if (!eventSkill)
    return {
      expAdditionalRate: 0,
      portalAdditionalExpRate: 0,
      araneRiverAdditionalExpRate: 0,
      grandisAdditionalExpRate: 0,
      monsterParkAdditionalExpRate: 0,
    };

  const effectLines = eventSkill.skill_effect.split('\n');

  let expAdditionalRate = 0;
  let portalAdditionalExpRate = 0;
  let araneRiverAdditionalExpRate = 0;
  let grandisAdditionalExpRate = 0;
  let monsterParkAdditionalExpRate = 0;

  effectLines.forEach((line) => {
    if (line.includes('폴로/프리토/에스페시아, 불꽃늑대 획득 경험치')) {
      portalAdditionalExpRate = extractValue(line);
    }
    if (line.includes('아케인리버 일일퀘스트 완료 시 획득 경험치')) {
      araneRiverAdditionalExpRate = extractValue(line);
    }
    if (line.includes('그란디스 일일퀘스트 완료 시 획득 경험치')) {
      grandisAdditionalExpRate = extractValue(line);
    }
    if (line.includes('몬스터파크 퇴장 시 획득하는 경험치')) {
      monsterParkAdditionalExpRate = extractValue(line);
    }
    if (line.match(/획득 경험치 (\d+(\.\d+)?)% 증가/) && line.length < 20) {
      // '획득 경험치'가 포함된 문자열에서만 값을 추출하도록 정규 표현식 수정
      expAdditionalRate = extractValue(line);
    }
  });

  return {
    expAdditionalRate,
    portalAdditionalExpRate,
    araneRiverAdditionalExpRate,
    grandisAdditionalExpRate,
    monsterParkAdditionalExpRate,
  };
};
