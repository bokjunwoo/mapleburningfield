export const findHighestHyperStatLevel = (
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
