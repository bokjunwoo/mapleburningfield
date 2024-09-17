interface MapMobInfo {
  name: string;
  level: number;
  meso: number;
  exp: number;
  number_of_mob: number;
}

interface MobMeso {
  pure: number;
  bonus: number;
}

interface MobInfoProps {
  mob: MapMobInfo;
}
