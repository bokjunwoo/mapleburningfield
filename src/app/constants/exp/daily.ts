export const ARANE_RIVER_DAILY_QUEST_REGIONS: AraneRiverDailyQuestRegion[] = [
  '소멸의여로',
  '츄츄아일랜드',
  '레헬른',
  '아르카나',
  '모라스',
  '에스페라',
  '문브릿지',
  '고통의미궁',
  '리멘',
];

export const ARANE_RIVER_DAILY_QUEST_EXP: RegionLevelMap<AraneRiverDailyQuestRegion> =
  {
    소멸의여로: 732132258,
    츄츄아일랜드: 2141658246,
    레헬른: 3189098250,
    아르카나: 3305187639,
    모라스: 4398266165,
    에스페라: 4530843954,
    문브릿지: 8397548775,
    고통의미궁: 9057690000,
    리멘: 10225741680,
  };

export const ARANE_RIVER_DAILY_QUEST_MIN_REGIONS_LEVEL: RegionLevelMap<AraneRiverDailyQuestRegion> =
  {
    소멸의여로: 200,
    츄츄아일랜드: 210,
    레헬른: 220,
    아르카나: 225,
    모라스: 230,
    에스페라: 235,
    문브릿지: 245,
    고통의미궁: 250,
    리멘: 255,
  };

export const GRANDIS_DAILY_QUEST_REGIONS: GrandisDailyQuestRegion[] = [
  '세르니움',
  '호텔아르크스',
  '오디움',
  '도원경',
  '아르테리아',
  '카르시온',
  '탈라하트',
];

export const GRANDIS_DAILY_QUEST_EXP: RegionLevelMap<GrandisDailyQuestRegion> =
  {
    세르니움: 16455682080,
    호텔아르크스: 19371792600,
    오디움: 23246151120,
    도원경: 32127015480,
    아르테리아: 38593455264,
    카르시온: 45635222880,
    탈라하트: 89730912960,
  };

export const GRANDIS_DAILY_QUEST_MIN_REGIONS_LEVEL: RegionLevelMap<GrandisDailyQuestRegion> =
  {
    세르니움: 260,
    호텔아르크스: 265,
    오디움: 270,
    도원경: 275,
    아르테리아: 280,
    카르시온: 285,
    탈라하트: 290,
  };

export const HIGH_END_DUNGEON_REGIONS: HighEndDungeonRegion[] = [
  '소멸의여로',
  '츄츄아일랜드',
  '레헬른',
  '아르카나',
  '모라스',
  '에스페라',
  '셀라스',
  '문브릿지',
  '고통의미궁',
  '리멘',
];

export const EXTREME_PARK_REGION: ExtremeParkRegion = '익스트림 몬스터파크';

export const MONSTER_PARK_ALL_REGIONS: MonsterParkRegion[] = [
  ...HIGH_END_DUNGEON_REGIONS,
  EXTREME_PARK_REGION,
];

export const DAILY_QUEST_ALL_REGIONS: ExpQuestContent[] = [
  '소멸의여로',
  '츄츄아일랜드',
  '레헬른',
  '아르카나',
  '모라스',
  '에스페라',
  '문브릿지',
  '고통의미궁',
  '리멘',
  '세르니움',
  '호텔아르크스',
  '오디움',
  '도원경',
  '아르테리아',
  '카르시온',
  '탈라하트',
];

export const HIGH_END_DUNGEON_EXP: RegionLevelMap<HighEndDungeonRegion> = {
  소멸의여로: 359915080,
  츄츄아일랜드: 1285078680,
  레헬른: 3217660990,
  아르카나: 4707573370,
  모라스: 5993511040,
  에스페라: 6919667370,
  셀라스: 8712814920,
  문브릿지: 11716616500,
  고통의미궁: 14058901000,
  리멘: 15532557400,
};

export const EXTREME_PARK_EXP: Record<number, number> = {
  260: 53040000000,
  261: 53244000000,
  262: 53448000000,
  263: 53652000000,
  264: 53856000000,
  265: 70278000000,
  266: 70543200000,
  267: 70808400000,
  268: 71073600000,
  269: 71338800000,
  270: 113400000000,
  271: 113820000000,
  272: 114240000000,
  273: 114660000000,
  274: 115080000000,
  275: 147840000000,
  276: 148377600000,
  277: 148915200000,
  278: 149452800000,
  279: 149990400000,
  280: 163296000000,
  281: 163879200000,
  282: 164462400000,
  283: 165045600000,
  284: 165628800000,
  285: 166212000000,
  286: 166795200000,
  287: 167378400000,
  288: 167961600000,
  289: 168544800000,
  290: 169128000000,
  291: 169711200000,
  292: 170294400000,
  293: 170877600000,
  294: 171460800000,
  295: 172044000000,
  296: 172627200000,
  297: 173210400000,
  298: 173793600000,
  299: 174376800000,
};

export const HIGH_END_DUNGEON_MIN_REGIONS_LEVEL: RegionLevelMap<HighEndDungeonRegion> =
  {
    소멸의여로: 200,
    츄츄아일랜드: 210,
    레헬른: 220,
    아르카나: 225,
    모라스: 230,
    에스페라: 235,
    셀라스: 240,
    문브릿지: 245,
    고통의미궁: 250,
    리멘: 255,
  };

export const EXTREME_DUNGEON_MIN_REGION_LEVEL: RegionLevelMap<ExtremeParkRegion> =
  {
    '익스트림 몬스터파크': 260,
  };
