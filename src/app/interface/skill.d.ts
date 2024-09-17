interface SkillInfo {
  ICON: string;
  NAME: string;
  DATE: string;
  MAIN_DESCRIPTION: string;
  TIME_DESCRIPTION: string;
  EXP_DESCRIPTION: string;
  INITIAL_MOB_KILL: number;
  ACTIVATION_COUNT: number;
  EXP_MULTIPLIER?: number;
  REQUIRED_MOB_COUNT?: number;
  DELAY?: number;
}
