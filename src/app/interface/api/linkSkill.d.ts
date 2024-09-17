interface LinkSkillInfo {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_icon: string;
  skill_effect_next: null | string;
}

interface CharacterLinkSkill {
  date: string | null;
  character_class: string;
  character_link_skill: LinkSkillInfo[];
  character_link_skill_preset_1: LinkSkillInfo[];
  character_link_skill_preset_2: LinkSkillInfo[];
  character_link_skill_preset_3: LinkSkillInfo[];
}
