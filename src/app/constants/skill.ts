export const EVENT_SKILL_INFO: SkillInfo = {
  ICON: 'event_skill',
  NAME: '젠이츠와 이노스케',
  DATE: '2024.11.21 ~ 2024.12.18',
  MAIN_DESCRIPTION:
    '레벨 범위 몬스터 200마리당 스킬 1회 발동하며 최대 15마리의 적을 1500% 데미지로 6번 공격하는 스킬 발동',
  TIME_DESCRIPTION: '캐릭터당 일일 30회',
  EXP_DESCRIPTION: '스킬발동시 약 180마리 분량의 경험치 획득',
  INITIAL_MOB_KILL: 180,
  REQUIRED_MOB_COUNT: 300,
  DELAY: 5,
  ACTIVATION_COUNT: 30,
};

export const BOOSTER_INFO: SkillInfo = {
  ICON: 'booster',
  NAME: 'VIP 부스터',
  DATE: '2024.10.17 ~ 2024.12.18',
  MAIN_DESCRIPTION:
    '부스터 몹젠(5.5초 + 서버랙)마다 10마리씩 젠되며 최대 15마리를 넘지 않습니다',
  TIME_DESCRIPTION: '캐릭터당 일일 10회',
  EXP_DESCRIPTION:
    '100초간 생성된 몬스터 1마리당 필드 몬스터 순수 경험치 x 10배의 경험치 획득 (최대 180마리)',
  EXP_MULTIPLIER: 10,
  INITIAL_MOB_KILL: 180,
  ACTIVATION_COUNT: 10,
};

export const EVENT_BUFF_SKILL_NAME = '차원 너머의 힘';
