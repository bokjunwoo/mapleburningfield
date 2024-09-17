type StatType =
  | 'STR'
  | 'DEX'
  | 'INT'
  | 'LUK'
  | 'HP'
  | 'MP'
  | 'DF/TF/PP'
  | '크리티컬 확률'
  | '크리티컬 데미지'
  | '방어율 무시'
  | '데미지'
  | '보스 몬스터 공격 시 데미지 증가'
  | '상태 이상 내성'
  | '공격력/마력'
  | '획득 경험치'
  | '아케인포스'
  | '일반 몬스터 공격 시 데미지 증가';

interface HyperStatInfo {
  stat_type: StatType;
  stat_point: number | null;
  stat_level: number;
  stat_increase: string | null;
}

interface CharacterHyperStat {
  date: string | null;
  character_class: string;
  use_preset_no: string;
  use_available_hyper_stat: number;
  hyper_stat_preset_1: HyperStatInfo[];
  hyper_stat_preset_1_remain_point: number;
  hyper_stat_preset_2: HyperStatInfo[];
  hyper_stat_preset_2_remain_point: number;
  hyper_stat_preset_3: HyperStatInfo[];
  hyper_stat_preset_3_remain_point: number;
}
