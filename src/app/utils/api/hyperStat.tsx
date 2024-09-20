const findHyperStatLevel = (
  data: CharacterHyperStat,
  targetStatType: StatType,
) => {
  const presets = [
    data.hyper_stat_preset_1,
    data.hyper_stat_preset_2,
    data.hyper_stat_preset_3,
  ];

  let highestStatLevel = 0;

  presets.forEach((preset) => {
    preset.forEach((stat) => {
      if (
        stat.stat_type === targetStatType &&
        stat.stat_level > highestStatLevel
      ) {
        highestStatLevel = stat.stat_level;
      }
    });
  });

  return highestStatLevel;
};

const hyperStatExpRate = (level: number): number => {
  if (level <= 10) {
    return level * 0.5;
  }
  return level - 10 + 5;
};

export const findHyperStatExpRate = (
  data: CharacterHyperStat,
  targetStatType: StatType,
) => {
  const hyperStatLevel = findHyperStatLevel(data, targetStatType);
  const expRate = hyperStatExpRate(hyperStatLevel);

  return expRate;
};
