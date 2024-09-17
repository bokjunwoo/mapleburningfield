const timeMap: TimeMap = {
  '30분': 30,
  '1시간': 60,
  '2시간': 120,
};

export const selectedTimeInMinutes = (value: string): number => {
  return timeMap[value] || 0;
};

export const a = 0;
