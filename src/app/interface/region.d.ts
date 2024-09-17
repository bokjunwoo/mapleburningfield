interface ExpectedExpRegionListParams<
  T extends ExpQuestContent | ExtremeParkRegion,
> {
  regions: T[];
  characterLevel: number;
  questExp: { [key in T]: number };
  expRate: number;
  obtainableRegions: T[];
}
