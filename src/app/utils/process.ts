import { RATE_NAME } from '../constants/rate';
import { findAbilityRates } from './api/ability';
import { findCashItemEquipmentExpRate } from './api/cashItemEquipment';
import {
  calculateSolJanusExpRate,
  findHexaCoreLevel,
} from './api/hexaCoreEquipment';
import { findHighestHyperStatLevel } from './api/hyperStat';
import { findItemEquipmentRates, findTitleExpRate } from './api/itemEquipment';
import {
  calculateElvenBlessingExpRate,
  findLinkSkillLevel,
} from './api/linkSkill';
import { findSymbolRates } from './api/symbol';
import {
  findUnionRaiderRates,
  findUnionOccupiedExpRate,
  findUnionArtifactEffectRates,
} from './api/union';
import {
  calculateHolySymbolExpRate,
  calculateHolySymbolItemDropRate,
  findLoadedDiceVCoreExpRate,
  findVCoreLevel,
} from './api/vCoreEquipment';

const processExpData = ({
  expHyperStat,
  elvenBlessing,
  expRateHolySymbol,
  solJanus,
  loadedDice,
  showDown,
  expTitle,
  boostRing,
  kinshipRing,
  unionZero,
  unionExpOccupied,
  expRateArtifact,
  spiritPendant,
  eventSkillStat,
  expRateSymbol,
}: ProcessExpData) => {
  return [
    { label: RATE_NAME.HYPER_STAT, value: expHyperStat },
    {
      label: RATE_NAME.ELVEN_BLESSING,
      value: elvenBlessing,
    },
    { label: RATE_NAME.HOLY_SYMBOL, value: expRateHolySymbol },
    { label: RATE_NAME.SOL_JANUS, value: solJanus },
    { label: RATE_NAME.LOADED_DICE, value: loadedDice },
    { label: RATE_NAME.SHOW_DOWN, value: showDown },
    { label: RATE_NAME.SPIRIT_PENDANT, value: spiritPendant },
    { label: RATE_NAME.EXP_TITLE, value: expTitle },
    { label: RATE_NAME.BOOST_RING, value: boostRing },
    { label: RATE_NAME.KINSHIP_RING, value: kinshipRing },
    { label: RATE_NAME.UNION_ZERO, value: unionZero },
    { label: RATE_NAME.UNION_OCCUPIED, value: unionExpOccupied },
    { label: RATE_NAME.UNION_ARTIFACT, value: expRateArtifact },
    { label: RATE_NAME.EXP_EVENT_STAT, value: eventSkillStat },
    { label: RATE_NAME.TALLAHART_SYMBOL, value: expRateSymbol },
  ];
};

// 아이템 드롭 관련 데이터 처리 함수
const processItemDropData = ({
  itemDropRateHolySymbol,
  itemDropRateArtifact,
  itemDropRateAbility,
  itemDropRateItemEquipment,
  showDown,
  itemDropSymbol,
}: ProcessItemDropData) => {
  return [
    { label: RATE_NAME.HOLY_SYMBOL, value: itemDropRateHolySymbol },
    { label: RATE_NAME.UNION_ARTIFACT, value: itemDropRateArtifact },
    { label: RATE_NAME.ABILITY, value: itemDropRateAbility },
    {
      label: RATE_NAME.ITEM_EQUIPMENT,
      value: itemDropRateItemEquipment,
    },
    {
      label: RATE_NAME.SHOW_DOWN,
      value: showDown,
    },
    {
      label: RATE_NAME.TALLAHART_SYMBOL,
      value: itemDropSymbol,
    },
  ];
};

// 메소 드롭 관련 데이터 처리 함수
const processMesoDropData = ({
  mesoDropRateArtifact,
  mesoDropRateAbility,
  mesoDropRateItemEquipment,
  unionPhantom,
  greed,
  mesoDropSymbol,
}: ProcessMesoDropData) => {
  return [
    {
      label: RATE_NAME.UNION_ARTIFACT,
      value: mesoDropRateArtifact,
    },
    { label: RATE_NAME.ABILITY, value: mesoDropRateAbility },
    {
      label: RATE_NAME.ITEM_EQUIPMENT,
      value: mesoDropRateItemEquipment,
    },
    {
      label: RATE_NAME.UNION_PHANTOM,
      value: unionPhantom,
    },
    {
      label: RATE_NAME.GREED,
      value: greed,
    },
    {
      label: RATE_NAME.TALLAHART_SYMBOL,
      value: mesoDropSymbol,
    },
  ];
};

export const processCharacterData = ({
  hyperStat,
  vmatrix,
  hexaMatrix,
  linkSkill,
  itemEquipment,
  cashItemEquipment,
  symbol,
  ability,
  classBishop,
  classNightLoad,
  classShadower,
  eventBuff,
  unionRaider,
  unionArtifact,
}: ProcessCharacterData) => {
  const expHyperStatLevel = findHighestHyperStatLevel(hyperStat, '획득 경험치');
  const holySymbolCoreLevel = findVCoreLevel(vmatrix, '쓸만한 홀리 심볼');
  const solJanusCoreLevel = findHexaCoreLevel(hexaMatrix, '솔 야누스');
  const loadedDiceExpRate = findLoadedDiceVCoreExpRate(vmatrix);
  const elvenBlessingSkillLevel = findLinkSkillLevel(linkSkill, '엘프의 축복');
  const itemEquipmentRates = findItemEquipmentRates(itemEquipment);
  const titleExpRate = findTitleExpRate(itemEquipment);
  const cashItemEquipmentExpRates =
    findCashItemEquipmentExpRate(cashItemEquipment);
  const unionRaiderRates = findUnionRaiderRates(unionRaider);
  const unionOccupiedExpRate = findUnionOccupiedExpRate(unionRaider);
  const unionArtifactEffectRates = findUnionArtifactEffectRates(unionArtifact);
  const abilityRates = findAbilityRates(ability);
  const symbolRates = findSymbolRates(symbol);

  const processedExpData = processExpData({
    expHyperStat: expHyperStatLevel,
    elvenBlessing: calculateElvenBlessingExpRate(elvenBlessingSkillLevel),
    expRateHolySymbol:
      classBishop.expRate !== 0
        ? classBishop.expRate
        : calculateHolySymbolExpRate(holySymbolCoreLevel),
    solJanus: calculateSolJanusExpRate(solJanusCoreLevel),
    loadedDice: loadedDiceExpRate,
    showDown: classNightLoad.expRate,
    spiritPendant: itemEquipmentRates.expRate,
    expTitle: titleExpRate,
    boostRing: cashItemEquipmentExpRates.boostRing,
    kinshipRing: cashItemEquipmentExpRates.kinshipRing,
    unionZero: unionRaiderRates.ZeroUnionRate,
    unionExpOccupied: unionOccupiedExpRate,
    expRateArtifact: unionArtifactEffectRates.expRate,
    eventSkillStat: eventBuff.expAdditionalRate,
    expRateSymbol: symbolRates.expRate,
  });

  const processedItemDropData = processItemDropData({
    itemDropRateHolySymbol:
      classBishop.itemDropRate !== 0
        ? classBishop.itemDropRate
        : calculateHolySymbolItemDropRate(holySymbolCoreLevel),
    itemDropRateArtifact: unionArtifactEffectRates.itemDropRate,
    itemDropRateAbility: abilityRates.itemDropRate,
    itemDropRateItemEquipment: itemEquipmentRates.itemDropRate,
    showDown: classNightLoad.itemDropRate,
    itemDropSymbol: symbolRates.itemDropRate,
  });

  const processedMesoDropData = processMesoDropData({
    mesoDropRateArtifact: unionArtifactEffectRates.mesoDropRate,
    mesoDropRateAbility: abilityRates.mesoDropRate,
    mesoDropRateItemEquipment: itemEquipmentRates.mesoDropRate,
    unionPhantom: unionRaiderRates.PhantomUnionRate,
    greed: classShadower,
    mesoDropSymbol: symbolRates.mesoDropRate,
  });

  return { processedExpData, processedItemDropData, processedMesoDropData };
};
