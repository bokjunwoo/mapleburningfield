interface RateInputOption {
  label: string;
  key: string;
}

interface RateItem {
  label: string;
  Components: React.ComponentType[];
  bgcolor: string;
}

interface RateChangeParams {
  rateItem: SelectItem[];
  rateName: string;
  targetValue: string;
}

interface HandleRateChangeParams extends RateChangeParams {
  setRate: (newRate: SelectItem[]) => void;
  setValue: (newValue: string) => void;
}

interface HandleRateInputChangeParams extends HandleRateChangeParams {
  regex: RegExp;
  maxAllowedValue: number;
}

interface HandlePresetRateChangeParams extends RateChangeParams {
  setValue: (newValue: string) => void;
  setStoredValue: (newRate: SelectItem[]) => void;
}

interface HandlePresetPotionRateChangeParams {
  itemDropStoredValue: SelectItem[];
  setItemDropStoredValue: (newRate: SelectItem[]) => void;
  mesoDropStoredValue: SelectItem[];
  setMesoDropStoredValue: (newRate: SelectItem[]) => void;
  rateName: string;
  targetValue: string;
  setValue: (newValue: string) => void;
}

interface HandlePotionRateChangeParams extends HandleRateChangeParams {
  syncSetState: SetterOrUpdater<SelectItem[]>;
}

interface HandleSyncSetStateSelectParams extends HandleRateChangeParams {
  syncSetStates: SetterOrUpdater<SelectItem[]>[];
  syncItems: SelectItem[][];
  itemId: number;
}
