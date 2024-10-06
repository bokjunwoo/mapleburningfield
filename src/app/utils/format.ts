export const formatNumber = (num: number, unit?: '메소' | '경험치') => {
  if (num === 0) {
    return '0';
  }

  const units = [' ', '만', '억', '조', '경'];
  let result = '';
  let unitIndex = 0;

  let number = Math.floor(num);

  while (number > 0) {
    const remainder = number % 10000;
    const chunk = remainder > 0 ? `${remainder}${units[unitIndex]} ` : '';
    result = chunk + result;
    number = Math.floor(number / 10000);
    unitIndex += 1;
  }

  if (unit) {
    return `${result.trim()} ${unit}`;
  }
  return result.trim();
};

export const formatTime = (time: number) => {
  const absTotalSeconds = Math.abs(time);
  const roundedSeconds = Math.round(absTotalSeconds);
  const minutes = Math.floor(roundedSeconds / 60);
  const seconds = roundedSeconds % 60;

  const sign = time < 0 ? '-' : '';

  if (minutes === 0) {
    return `${sign}${seconds}초`;
  }
  return `${sign}${minutes}분 ${seconds}초`;
};

export const truncateToFixed = (value: number, decimals: number): string => {
  if (value === 0) return '0';

  let truncatedValue = value.toFixed(decimals);

  // 만약 소수점 자리들이 전부 0이라면, 자릿수를 늘려서 첫 번째 0이 아닌 숫자가 나올 때까지 증가
  let extraDecimals = decimals;
  while (Number(truncatedValue) === 0 && extraDecimals < 20) {
    extraDecimals += 1;
    truncatedValue = value.toFixed(extraDecimals);
  }

  // 불필요한 0과 소수점 제거
  truncatedValue = truncatedValue.replace(/\.?0+$/, '');

  return truncatedValue;
};

export const extractValue = (value: string): number => {
  const match = value.match(/(\d+(\.\d+)?)%?/);
  return match ? parseFloat(match[1]) : 0;
};

export const extractWord = (text: string, index: number): string => {
  const words = text.split(/\s+/);
  return words[index] || '';
};

export const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split('T')[0];
};
