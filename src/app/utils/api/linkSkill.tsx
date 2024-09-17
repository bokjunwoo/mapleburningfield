export const findLinkSkillLevel = (
  data: CharacterLinkSkill,
  targetSkillName: string,
): number => {
  const allSkills = [
    ...data.character_link_skill_preset_1,
    ...data.character_link_skill_preset_2,
    ...data.character_link_skill_preset_3,
  ];

  const foundSkill = allSkills.find((s) => s.skill_name === targetSkillName);
  return foundSkill ? foundSkill.skill_level : 0;
};

export const calculateElvenBlessingExpRate = (level: number): number => {
  switch (level) {
    case 0:
      return 0;
    case 1:
      return 10;
    case 2:
      return 15;
    default:
      return 0;
  }
};
