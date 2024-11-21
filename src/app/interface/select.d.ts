interface SelectItem {
  id?: number;
  label: string;
  value: number;
}

interface SelectMenuItem {
  key: string;
  label: string;
  items: SelectItem[];
}

interface SelectThItem {
  label: string;
  selectedValue: number;
  menuItem?: SelectMenuItem;
  onCountChange?: (event: SelectChangeEvent<unknown>) => void;
}

interface TabItem {
  isEvent: boolean;
  isNew?: boolean;
  label: string;
}
