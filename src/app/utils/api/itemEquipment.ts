import { extractValue } from '../format';

const findPresetPendant = (presets: EquipmentItem[][]) => {
  const presetsWithPendant = presets.filter((preset) =>
    preset.some((item) => item.item_name.includes('정령의 펜던트')),
  );

  return presetsWithPendant.length > 0 ? presetsWithPendant : null;
};

const calculateDropRates = (
  data: EquipmentItem[],
  targetEquipmentName: string,
) => {
  let mesoDropRate = 0;
  let itemDropRate = 0;

  data.forEach((item) => {
    if (item.item_equipment_part === targetEquipmentName) {
      const options = [
        item.potential_option_1,
        item.potential_option_2,
        item.potential_option_3,
        item.additional_potential_option_1,
        item.additional_potential_option_2,
        item.additional_potential_option_3,
      ];

      options.forEach((option) => {
        if (option && option.includes('메소 획득량')) {
          mesoDropRate += extractValue(option);
        }
        if (option && option.includes('아이템 드롭률')) {
          itemDropRate += extractValue(option);
        }
      });
    }
  });

  return { mesoDropRate, itemDropRate };
};

const calculateTotalDropRates = (preset: EquipmentItem[]) => {
  const ringRates = calculateDropRates(preset, '반지');
  const pendantRates = calculateDropRates(preset, '펜던트');
  const faceAccessoryRates = calculateDropRates(preset, '얼굴장식');
  const eyeAccessoryRates = calculateDropRates(preset, '눈장식');
  const earringRates = calculateDropRates(preset, '귀고리');

  const totalMesoDropRate =
    ringRates.mesoDropRate +
    pendantRates.mesoDropRate +
    faceAccessoryRates.mesoDropRate +
    eyeAccessoryRates.mesoDropRate +
    earringRates.mesoDropRate;

  const totalItemDropRate =
    ringRates.itemDropRate +
    pendantRates.itemDropRate +
    faceAccessoryRates.itemDropRate +
    eyeAccessoryRates.itemDropRate +
    earringRates.itemDropRate;

  return { totalMesoDropRate, totalItemDropRate };
};

const findHighestDropRates = (presets: EquipmentItem[][]) => {
  let highestMesoDropRate = 0;
  let highestItemDropRate = 0;

  presets.forEach((preset) => {
    const { totalMesoDropRate, totalItemDropRate } =
      calculateTotalDropRates(preset);

    if (totalMesoDropRate > highestMesoDropRate) {
      highestMesoDropRate = totalMesoDropRate;
    }
    if (totalItemDropRate > highestItemDropRate) {
      highestItemDropRate = totalItemDropRate;
    }
  });

  return { highestMesoDropRate, highestItemDropRate };
};

export const findItemEquipmentRates = (data: CharacterItemEquipment) => {
  const presets = [
    data.item_equipment_preset_1,
    data.item_equipment_preset_2,
    data.item_equipment_preset_3,
  ];

  // 우선 순위 (정령의 펜던트 착용 프리셋 찾기)
  const presetWithPendant = findPresetPendant(presets);

  // 정령의 펜던트가 없는 경우
  if (!presetWithPendant) {
    const rates = findHighestDropRates(presets);

    return {
      expRate: 0,
      itemDropRate: rates.highestItemDropRate,
      mesoDropRate: rates.highestMesoDropRate,
    };
  }

  const rates = findHighestDropRates(presetWithPendant);
  return {
    expRate: 30,
    itemDropRate: rates.highestItemDropRate,
    mesoDropRate: rates.highestMesoDropRate,
  };
};

const isDateOptionExpired = (dateOptionExpire: string): boolean => {
  const currentDate = new Date();

  const expireDate = new Date(dateOptionExpire);

  return currentDate < expireDate;
};

const checkDateOptionExpire = (dateOptionExpire: string | null): boolean => {
  if (!dateOptionExpire) {
    return true;
  }

  return isDateOptionExpired(dateOptionExpire);
};

// 칭호
export const findTitleExpRate = (data: CharacterItemEquipment): number => {
  if (data.title === null) return 0;
  const isExpired = checkDateOptionExpire(data.title.date_option_expire);
  const titleBonuses: { [key: string]: number } = {
    '쑥쑥 새싹': 10,
    'Eternal Flame': 10,
    'Infinite Flame': 20,
    FREMIUM: 20,
    'LET"S MAPLE': 20,
    '엘 클리어': 30,
    '시그너스 기사단': 40,
  };

  return isExpired ? titleBonuses[data.title.title_name] || 0 : 0;
};
