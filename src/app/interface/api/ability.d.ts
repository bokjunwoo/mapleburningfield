type AbilityGrade = '레전드리' | '유니크' | '에픽' | '레어';

interface AbilityInfo {
  ability_no: string;
  ability_grade: AbilityGrade;
  ability_value: string;
}

interface AbilityPreset {
  ability_preset_grade: AbilityGrade;
  ability_info: AbilityInfo[];
}

interface CharacterAbility {
  date: string | null;
  ability_grade: AbilityGrade;
  ability_info: AbilityInfo[];
  remain_fame: number;
  preset_no: number;
  ability_preset_1: AbilityPreset;
  ability_preset_2: AbilityPreset;
  ability_preset_3: AbilityPreset;
}
