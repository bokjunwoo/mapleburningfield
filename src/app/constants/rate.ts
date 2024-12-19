export const RATE_NAME = {
  ABILITY: 'ability',
  ACCUMULATION_POTION: 'accumulation_potion',
  AZMOTH_POTION: 'azmoth_potion',
  BOOST_RING: 'boost_ring',
  ELVEN_BLESSING: 'elven_blessing',
  ETC_EXP: 'etc_exp',
  ETC_ITEM_DROP: 'etc_item_drop',
  ETC_MESO_DROP: 'etc_meso_drop',
  EXP_COUPON: 'exp_coupon',
  EXP_EVENT_STAT: 'exp_event_stat',
  EXP_TITLE: 'exp_title',
  EXTREME_GOLD_POTION: 'extreme_gold_potion',
  HOLY_SYMBOL: 'holy_symbol',
  HYPER_STAT: 'hyper_stat',
  ITEM_EQUIPMENT: 'item_equipment',
  KINSHIP_RING: 'kinship_ring',
  LOADED_DICE: 'loaded_dice',
  MVP_COUPON: 'mvp_coupon',
  PC_ROOM: 'PC_room',
  SHOW_DOWN: 'show_down',
  GREED: 'greed',
  SOL_JANUS: 'sol_janus',
  SPIRIT_PENDANT: 'spirit_pendant',
  UNION_ARTIFACT: 'union_artifact',
  UNION_LUCK_COUPON: 'union_luck_coupon',
  UNION_PHANTOM: 'union_Phantom',
  UNION_OCCUPIED: 'union_occupied',
  UNION_WEALTH_COUPON: 'union_wealth_coupon',
  UNION_ZERO: 'union_Zero',
  VIP_COUPON: 'VIP_coupon',
  WEALTH_ACQUISITION_POTION: 'wealth_acquisition_potion',
  TALLAHART_SYMBOL: 'Tallahart_symbol',
  EVENT_WORLD: 'event_world',
};

export const RATE_KEY = {
  EXP: 'exp_rate_preset',
  ITEM_DROP: 'item_drop_rate_preset',
  MESO_DROP: 'meso_drop_rate_preset',
};

export const EXP_CONTENT: ExpContentType = {
  ARANE_RIVER_DAILY_QUEST: '아케인리버 일일퀘스트',
  ARANE_RIVER_WEEKLY_QUEST: '아케인리버 주간퀘스트',
  GRANDIS_DAILY_QUEST: '그란디스 일일퀘스트',
  MONSTER_PARK: '몬스터파크',
  EXTREME_PARK: '익스트림 몬스터파크',
  EPIC_DUNGEON: '에픽던전',
  EVENT_PUNCHKING: '펀치킹(비밀 기록 탈환)',
  EVENT_MAP: '잠수맵(견습 로봇 놀이터)',
  VIP_SAUNA: 'VIP 사우나(잠수맵)',
  EXP_COUPON: 'EXP 교환권',
  AZMOTH_CANYON: '아즈모스 협곡',
  GOLDEN_TOMATO: '황금 토마토 농장(펀치킹)',
};

export const TALLAHART_SYMBOL_EXP_ITEMS: SelectItem[] = [
  { id: 0, value: 0, label: '미적용' },
  ...Array.from({ length: 11 }, (_, index) => ({
    id: index + 1,
    value: index === 0 ? 10 : 10 + index * 4,
    label: `레벨 ${index + 1} (+${index === 0 ? 10 : 10 + index * 4}%)`,
  })),
];

export const TALLAHART_SYMBOL_DROP_ITEMS: SelectItem[] = [
  { id: 0, value: 0, label: '미적용' },
  ...Array.from({ length: 11 }, (_, index) => ({
    id: index + 1,
    value: index === 0 ? 5 : 5 + index * 1,
    label: `레벨 ${index + 1} (+${index === 0 ? 5 : 5 + index * 1}%)`,
  })),
];

export const PC_ROOM_EXP_ITEMS: SelectItem[] = [
  { id: 0, value: 0, label: '미적용' },
  { id: 1, value: 80, label: '적용 (+80%)' },
];

export const PC_ROOM_DROP_ITEMS: SelectItem[] = [
  { id: 0, value: 0, label: '미적용' },
  { id: 1, value: 10, label: '적용 (+10%)' },
];
