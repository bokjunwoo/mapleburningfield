interface CounterOption {
  count: number;
  disableIncrement: number;
  disableDecrement: number;
  increment: () => void;
  decrement: () => void;
}

interface StatItem {
  iconName: string;
  value: number;
}

interface RadioItem {
  label: string;
  value: number;
}

interface StatTextItem extends StatItem {
  label: string;
}

interface StatCheckboxItem extends StatItem, StatTextItem {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StatRadioItem extends StatItem, StatTextItem {
  radios: RadioItem[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StatCountButtonItem extends StatItem, StatTextItem, CounterOption {}
