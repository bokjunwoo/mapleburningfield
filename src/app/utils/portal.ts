export const calculatePrittoExpMultiplier = (
  expMultiplier: number,
  buffExpRate: number,
): number => {
  if (buffExpRate === 0) {
    return expMultiplier;
  }

  const total = expMultiplier * (1 + buffExpRate / 100);
  return total;
};

export const calculateRemainingTime = ({
  expReward,
  mobExp,
  count,
}: CalculateRemainingTimeParams) => {
  const remainingTime = (expReward / mobExp) * 60 - count;

  return Math.ceil(remainingTime);
};

export const levelByExpEventBuff = (exp: number): number => {
  switch (exp) {
    case 0:
      return 0;
    case 10:
      return 1;
    case 20:
      return 2;
    case 40:
      return 3;
    case 60:
      return 4;
    case 80:
      return 5;
    case 100:
      return 6;
    default:
      return 0;
  }
};

export const expByEventBuffLevel = (level: number): number => {
  switch (level) {
    case 0:
      return 0;
    case 1:
      return 10;
    case 2:
      return 20;
    case 3:
      return 40;
    case 4:
      return 60;
    case 5:
      return 80;
    case 6:
      return 100;
    default:
      return 0;
  }
};

export const getTimePolloColor = (seconds: number) => {
  if (seconds <= 60) {
    return '#fff1e6';
  }
  if (seconds <= 120) {
    return '#e2ece9';
  }
  return '#dfe7fd';
};

export const getTimePrittoColor = (seconds: number) => {
  if (seconds <= 0) {
    return '#fde2e4';
  }
  if (seconds <= 15) {
    return '#fff1e6';
  }
  if (seconds <= 30) {
    return '#e2ece9';
  }
  return '#dfe7fd';
};

export const getTimeInfernoWolfColor = (seconds: number) => {
  if (seconds <= 0) {
    return '#fde2e4';
  }
  if (seconds <= 25) {
    return '#fff1e6';
  }
  if (seconds <= 50) {
    return '#e2ece9';
  }
  return '#dfe7fd';
};
