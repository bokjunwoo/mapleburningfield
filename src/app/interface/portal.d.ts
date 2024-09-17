interface PortalCell {
  type: 'Pollo' | 'Pritto';
  label: string;
  expMultiplier: number;
  initialCount: number;
  count: number;
  increment: () => void;
  decrement: () => void;
  menuText?: string;
  menuItem?: SelectValue[];
  expMultiplierChange?: (event: SelectChangeEvent<unknown>) => void;
}

interface PortalContent {
  type: 'Pollo' | 'Pritto';
  cells: PortalCell[];
}

interface PortalCellProps {
  cells: PortalCell[];
}

interface CalculateRemainingTimeParams {
  expReward: number;
  mobExp: number;
  count: number;
}
