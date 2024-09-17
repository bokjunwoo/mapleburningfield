import { extractValue } from '../format';

// 유니온 캐릭터 효과(제로, 팬텀)
export const findUnionRaiderRates = (data: UnionRaider) => {
  const presets = [
    data.union_raider_preset_1,
    data.union_raider_preset_2,
    data.union_raider_preset_3,
    data.union_raider_preset_4,
    data.union_raider_preset_5,
  ];

  let ZeroUnionRate = 0;
  let PhantomUnionRate = 0;

  presets.forEach((preset) => {
    preset.union_raider_stat.forEach((stat) => {
      if (stat.includes('경험치 획득량')) {
        const expRate = extractValue(stat);
        if (expRate > ZeroUnionRate) {
          ZeroUnionRate = expRate;
        }
      }
      if (stat.includes('메소 획득량')) {
        const mesoRate = extractValue(stat);
        if (mesoRate > PhantomUnionRate) {
          PhantomUnionRate = mesoRate;
        }
      }
    });
  });

  return { ZeroUnionRate, PhantomUnionRate };
};

// 유니온 경험치 배치(경험치)
export const findUnionOccupiedExpRate = (data: UnionRaider): number => {
  const presets = [
    data.union_raider_preset_1,
    data.union_raider_preset_2,
    data.union_raider_preset_3,
    data.union_raider_preset_4,
    data.union_raider_preset_5,
  ];

  let maxExpRate = 0;

  presets.forEach((preset) => {
    preset.union_occupied_stat.forEach((stat) => {
      if (stat.includes('획득 경험치')) {
        const expRate = extractValue(stat);
        if (expRate > maxExpRate) {
          maxExpRate = expRate;
        }
      }
    });
  });

  return maxExpRate;
};

// 유니온 아트팩트(경험치, 메소, 아이템)
export const findUnionArtifactEffectRates = (data: UnionArtifact) => {
  let expRate = 0;
  let mesoDropRate = 0;
  let itemDropRate = 0;

  data.union_artifact_effect.forEach((effect) => {
    if (effect.name.includes('추가 경험치 획득')) {
      expRate = extractValue(effect.name);
    }
    if (effect.name.includes('메소 획득량')) {
      mesoDropRate = extractValue(effect.name);
    }
    if (effect.name.includes('아이템 드롭률')) {
      itemDropRate = extractValue(effect.name);
    }
  });

  return { expRate, mesoDropRate, itemDropRate };
};
