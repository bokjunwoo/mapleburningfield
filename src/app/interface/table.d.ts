interface HeadCellInfo extends AllMapRegion {
  map_name: string;
  map_region: AllMapRegion;
  mob_levels: number[];
  total_number_of_mob: number;
  total_mob_exp: number;
  total_mob_meso: MobMeso;
  burning_field: number;
}

interface HeadCell {
  id: keyof HeadCellInfo;
  label: string;
  disableSorting?: boolean;
  mediaQurey?: object;
}

interface MapInfoToHeadCellParams {
  mapInfo: RegionInfo;
  characterLevel: number;
  expRate: number;
  itemDropRate: number;
  mesoDropRate: number;
  burningField: number;
}

type MobCalculateHeadCellLabel = '시간' | '마릿수' | '경험치' | '메소';

interface MobCalculateHeadCell {
  label: MobCalculateHeadCellLabel;
}

interface MobContentCell {
  label: string;
  runeValue: number;
  expMultiplier: number;
  mobKillCount: number;
  isLevelProportional: boolean;
}

interface MobContent {
  runeState: (param: SerializableParam) => RecoilState<number>;
  cells: MobContentCell[];
}
