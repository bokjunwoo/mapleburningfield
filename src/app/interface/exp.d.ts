type AraneRiverDailyQuestRegion =
  | '소멸의여로'
  | '츄츄아일랜드'
  | '레헬른'
  | '아르카나'
  | '모라스'
  | '에스페라'
  | '문브릿지'
  | '고통의미궁'
  | '리멘';

type AraneRiverWeeklyQuestRegion =
  | '소멸의여로'
  | '츄츄아일랜드'
  | '레헬른'
  | '아르카나'
  | '모라스'
  | '에스페라';

type GrandisDailyQuestRegion =
  | '세르니움'
  | '호텔아르크스'
  | '오디움'
  | '도원경'
  | '아르테리아'
  | '카르시온'
  | '탈라하트';

type HighEndDungeonRegion =
  | '소멸의여로'
  | '츄츄아일랜드'
  | '레헬른'
  | '아르카나'
  | '모라스'
  | '에스페라'
  | '셀라스'
  | '문브릿지'
  | '고통의미궁'
  | '리멘';

type ExtremeParkRegion = '익스트림 몬스터파크';

type MonsterParkRegion = HighEndDungeonRegion | ExtremeParkRegion;

type EpicDungeonRegion = '하이마운틴' | '앵글러컴퍼니';

type PunchkingScore =
  | '직접입력'
  | '150'
  | '400'
  | '1000'
  | '1600'
  | '2000'
  | '2050';

type EventMapRegion = '참여 X' | '햇살 사용' | '햇살 미사용';

type VIPSaunaRegion = '이용권 미사용' | '이용권 사용';

type ExpContentTitle =
  | '아케인리버 일일퀘스트'
  | '아케인리버 주간퀘스트'
  | '그란디스 일일퀘스트'
  | '몬스터파크'
  | '에픽던전'
  | '펀치킹(비밀 기록 탈환)'
  | '잠수맵(견습 로봇 놀이터)'
  | 'VIP 사우나(잠수맵)';

type ExpContentType = {
  ARANE_RIVER_DAILY_QUEST: '아케인리버 일일퀘스트';
  ARANE_RIVER_WEEKLY_QUEST: '아케인리버 주간퀘스트';
  GRANDIS_DAILY_QUEST: '그란디스 일일퀘스트';
  MONSTER_PARK: '몬스터파크';
  EPIC_DUNGEON: '에픽던전';
  EVENT_PUNCHKING: '펀치킹(비밀 기록 탈환)';
  EVENT_MAP: '잠수맵(견습 로봇 놀이터)';
  VIP_SAUNA: 'VIP 사우나(잠수맵)';
};

type ExpQuestContent =
  | AraneRiverDailyQuestRegion
  | AraneRiverWeeklyQuestRegion
  | GrandisDailyQuestRegion
  | HighEndDungeonRegion;

type AllExpContent =
  | AraneRiverDailyQuestRegion
  | AraneRiverWeeklyQuestRegion
  | GrandisDailyQuestRegion
  | MonsterParkRegion
  | EpicDungeonRegion
  | EventMapRegion;

type RegionLevelMap<T extends string> = {
  [region in T]: number;
};

interface CalculateTotalExpParams<T> {
  characterLevel: number;
  regions: T[];
  questExp: { [key in T]: number };
  minLevelData: { [key in T]: number };
  additional: number;
}

interface CalculateTotalExpPercentageParams<T> {
  label: string;
  characterLevel: number;
  regions: T[];
  questExp: { [key in T]: number };
  minLevelData: { [key in T]: number };
  addExp: SelectItem[];
  setAddExp: (newExp: SelectItem[]) => void;
}

interface CalculateMonsterParkTotalExpPercentageParams {
  characterLevel: number;
  regions: MonsterParkRegion[];
  expMultiplier: string;
}

interface CalculateEpicDungeonTotalExpPercentageParams {
  characterLevel: number;
  region: EpicDungeonRegion | null;
  expMultiplier: number;
}

interface CalculatePunchkingExpPercentageParams {
  characterLevel: number;
  score: number;
}

interface CalculateRemainingExpParams {
  characterLevel: number;
  characterExp: number;
  totalExpectedExp: number;
  setCharacterLevel: (value: SetStateAction<number>) => void;
  setCharacterExp: (value: SetStateAction<number>) => void;
}

interface ExpectedExpRegion<T> {
  region: T;
  exp: number;
  count: number;
  checked: boolean;
  warning: boolean;
}
