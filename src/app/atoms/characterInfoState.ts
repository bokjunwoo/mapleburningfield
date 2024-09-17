import { atom } from 'recoil';

export const characterOcidState = atom<string>({
  key: 'characterOcid',
  default: '',
});

export const characterInfoState = atom<CharacterInfoBase>({
  key: 'characterInfoState',
  default: {
    date: '',
    character_name: '',
    world_name: '',
    character_gender: '',
    character_class: '',
    character_class_level: '',
    character_level: 0,
    character_exp: 0,
    character_exp_rate: '',
    character_guild_name: '',
    character_image: '',
    character_date_create: '',
    access_flag: '',
    liberation_quest_clear_flag: '',
  },
});
