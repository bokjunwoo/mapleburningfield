// 유니온 배치
interface BlockPosition {
  x: number;
  y: number;
}

interface BlockControlPoint {
  x: number;
  y: number;
}

interface UnionBlock {
  block_type: string;
  block_class: string;
  block_level: string;
  block_control_point: BlockControlPoint;
  block_position: BlockPosition[];
}

interface UnionInnerStat {
  stat_field_id: string;
  stat_field_effect: string;
}

interface UnionRaiderPreset {
  union_raider_stat: string[];
  union_occupied_stat: string[];
  union_inner_stat: UnionInnerStat[];
  union_block: UnionBlock[];
}

interface UnionRaider {
  date: string;
  union_raider_stat: string[];
  union_occupied_stat: string[];
  union_inner_stat: UnionInnerStat[];
  union_block: UnionBlock[];
  use_preset_no: number;
  union_raider_preset_1: UnionRaiderPreset;
  union_raider_preset_2: UnionRaiderPreset;
  union_raider_preset_3: UnionRaiderPreset;
  union_raider_preset_4: UnionRaiderPreset;
  union_raider_preset_5: UnionRaiderPreset;
}

// 아티팩트
interface UnionArtifactEffect {
  name: string;
  level: number;
}

interface UnionArtifactCrystal {
  name: string;
  validity_flag: string;
  date_expire: string;
  level: number;
  crystal_option_name_1: string;
  crystal_option_name_2: string;
  crystal_option_name_3: string;
}

interface UnionArtifact {
  date: string;
  union_artifact_effect: UnionArtifactEffect[];
  union_artifact_crystal: UnionArtifactCrystal[];
  union_artifact_remain_ap: number;
}
