import { extractValue } from '../format';

const findAbilityPreset = (data: CharacterAbility): AbilityPreset | null => {
  const presets: AbilityPreset[] = [
    data.ability_preset_1,
    data.ability_preset_2,
    data.ability_preset_3,
  ];

  let abilityPreset: AbilityPreset | null = null;
  let highestRate = 0;

  presets.forEach((preset) => {
    preset.ability_info.forEach((ability) => {
      if (
        ability.ability_value.includes('메소 획득량') ||
        ability.ability_value.includes('아이템 드롭률')
      ) {
        const rate = extractValue(ability.ability_value);
        if (rate > highestRate) {
          highestRate = rate;
          abilityPreset = preset;
        }
      }
    });
  });

  return abilityPreset;
};

const extractAbilityRates = (abilityPreset: AbilityPreset | null) => {
  let mesoDropRate = 0;
  let itemDropRate = 0;

  if (abilityPreset) {
    abilityPreset.ability_info.forEach((ability) => {
      if (ability.ability_value.includes('메소 획득량')) {
        mesoDropRate = extractValue(ability.ability_value);
      }
      if (ability.ability_value.includes('아이템 드롭률')) {
        itemDropRate = extractValue(ability.ability_value);
      }
    });
  }

  return { mesoDropRate, itemDropRate };
};

export const findAbilityRates = (data: CharacterAbility) => {
  const findPreset = findAbilityPreset(data);
  const { mesoDropRate, itemDropRate } = extractAbilityRates(findPreset);

  return { mesoDropRate, itemDropRate };
};
