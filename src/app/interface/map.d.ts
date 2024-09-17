type Area = '아케인리버' | '그란디스';

type AraneRiverRegion =
  | '소멸의여로'
  | '리버스시티'
  | '츄츄아일랜드'
  | '얌얌아일랜드'
  | '레헬른'
  | '아르카나'
  | '모라스'
  | '에스페라'
  | '셀라스'
  | '문브릿지'
  | '고통의미궁'
  | '리멘';

type GrandisRegion =
  | '세르니움'
  | '불타는세르니움'
  | '호텔아르크스'
  | '오디움'
  | '도원경'
  | '아르테리아'
  | '카르시온'
  | '탈라하트';

type AllMapRegion =
  | '소멸의여로'
  | '리버스시티'
  | '츄츄아일랜드'
  | '얌얌아일랜드'
  | '레헬른'
  | '아르카나'
  | '모라스'
  | '에스페라'
  | '셀라스'
  | '문브릿지'
  | '고통의미궁'
  | '리멘'
  | '세르니움'
  | '불타는세르니움'
  | '호텔아르크스'
  | '오디움'
  | '도원경'
  | '아르테리아'
  | '카르시온'
  | '탈라하트';

interface BaseRegionInfo {
  id: number;
  symbol: number;
  mobs: MapMobInfo[];
}

interface RegionInfo extends BaseRegionInfo {
  map_region: AllMapRegion;
  map_name: string;
  burning_field: number;
}

interface MapInfo extends HeadCellInfo, BaseRegionInfo {}

type MapData = {
  [key in AraneRiverRegions | GrandisRegions]: RegionInfo[];
};

type QuestMapData = {
  [key in AraneRiverRegions | GrandisRegions]: number;
};

interface MapInfoProps {
  mapInfo: MapInfo;
}

interface RegionColorType {
  [key: string]: { bgcolor: string };
}
