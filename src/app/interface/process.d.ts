interface SkillRates {
  expRate: number;
  itemDropRate: number;
}

interface EventBuffExpContentRates {
  araneRiverAdditionalExpRate: number;
  grandisAdditionalExpRate: number;
  monsterParkAdditionalExpRate: number;
}

interface EventBuffAllRates extends EventBuffExpContentRates {
  expAdditionalRate: number;
  portalAdditionalExpRate: number;
}

interface ProcessCharacterData {
  isEventWorld: boolean;
  ability: CharacterAbility;
  hyperStat: CharacterHyperStat;
  vmatrix: CharacterVCoreEquipment;
  hexaMatrix: CharacterHexaCoreEquipment;
  linkSkill: CharacterLinkSkill;
  itemEquipment: CharacterItemEquipment;
  cashItemEquipment: CharacterCashItemEquipment;
  unionRaider: UnionRaider;
  unionArtifact: UnionArtifact;
  classBishop: SkillRates;
  classNightLoad: SkillRates;
  classShadower: number;
  eventBuff: EventBuffAllRates;
  symbol: CharacterSymbol;
}

interface ProcessExpData {
  eventWorldExpRate: number;
  expHyperStat: number;
  elvenBlessing: number;
  expRateHolySymbol: number;
  solJanus: number;
  loadedDice: number;
  showDown: number;
  expTitle: number;
  boostRing: number;
  kinshipRing: number;
  unionZero: number;
  unionExpOccupied: number;
  expRateArtifact: number;
  spiritPendant: number;
  eventSkillStat: number;
  expRateSymbol: number;
}

interface ProcessItemDropData {
  itemDropRateHolySymbol: number;
  itemDropRateArtifact: number;
  itemDropRateAbility: number;
  itemDropRateItemEquipment: number;
  showDown: number;
  itemDropSymbol: number;
}

interface ProcessMesoDropData {
  mesoDropRateArtifact: number;
  mesoDropRateAbility: number;
  mesoDropRateItemEquipment: number;
  unionPhantom: number;
  greed: number;
  mesoDropSymbol: number;
}
