export const EVENT_SKILL_INFO: SkillInfo = {
  ICON: 'event_skill',
  NAME: '두근두근 청소시간',
  DATE: '이벤트 종료',
  MAIN_DESCRIPTION:
    '레벨 범위 몬스터 250마리당 스킬 1회 발동하며 최대 15마리의 적을 3000% 데미지로 1번 공격하는 폭발이 6회 발동하는 스킬이 4회 발동',
  TIME_DESCRIPTION: '캐릭터당 일일 30회',
  EXP_DESCRIPTION: '스킬발동시 약 165마리 분량의 경험치 획득',
  INITIAL_MOB_KILL: 165,
  REQUIRED_MOB_COUNT: 250,
  DELAY: 5,
  ACTIVATION_COUNT: 30,
};

export const BOOSTER_INFO: SkillInfo = {
  ICON: 'booster',
  NAME: 'VIP 부스터 / HEXA 부스터',
  DATE: 'VIP 부스터(2025.02.20 ~ 2025.04.16) / HEXA 부스터(상시)',
  MAIN_DESCRIPTION:
    '부스터 몹젠(5.5초 + 서버랙)마다 10마리씩 젠되며 최대 15마리를 넘지 않습니다',
  TIME_DESCRIPTION: '캐릭터당 일일 10회',
  EXP_DESCRIPTION:
    '100초간 생성된 몬스터 1마리당 필드 몬스터 순수 경험치 x 10배의 경험치 획득 (최대 180마리)',
  EXP_MULTIPLIER: 10,
  INITIAL_MOB_KILL: 180,
  ACTIVATION_COUNT: 10,
};

export const EVENT_BUFF_SKILL_NAME = '새벽별빛 환영';
