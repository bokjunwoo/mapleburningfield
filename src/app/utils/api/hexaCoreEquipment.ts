export const findHexaCoreLevel = (
  data: CharacterHexaCoreEquipment,
  targetCoreName: string,
) => {
  if (data.character_hexa_core_equipment === null) return 0;

  let coreLevel = 0;

  data.character_hexa_core_equipment.forEach((core) => {
    if (core.hexa_core_name === targetCoreName) {
      coreLevel = core.hexa_core_level;
    }
  });

  return coreLevel;
};

export const calculateSolJanusExpRate = (level: number) => {
  if (level === 0) return 0;
  let relativeLevel = 0;
  let baseRate = 10;

  if (level < 10) {
    relativeLevel = level;
    baseRate = 8;
  }

  if (level >= 10 && level < 20) {
    relativeLevel = level - 10;
    baseRate = 37;
  }

  if (level >= 20 && level < 30) {
    relativeLevel = level - 20;
    baseRate = 67;
  }

  if (level === 30) {
    return 100;
  }

  const additionalRate = Math.floor(relativeLevel * 2);

  const totalRate = baseRate + additionalRate;

  return totalRate;
};
