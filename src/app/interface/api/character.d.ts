interface CharacterOcid {
  ocid: string;
}

type CharacterClass =
  | ''
  | '히어로'
  | '팔라딘'
  | '다크나이트'
  | '아크메이지(불,독)'
  | '아크메이지(썬,콜)'
  | '비숍'
  | '보우마스터'
  | '신궁'
  | '패스파인더'
  | '나이트로드'
  | '섀도어'
  | '듀얼블레이더'
  | '바이퍼'
  | '캡틴'
  | '캐논마스터'
  | '소울마스터'
  | '플레임위자드'
  | '윈드브레이커'
  | '나이트워커'
  | '스트라이커'
  | '미하일'
  | '아란'
  | '에반'
  | '배틀메이지'
  | '와일드헌터'
  | '메카닉'
  | '데몬슬레이어'
  | '데몬어벤져'
  | '제논'
  | '블래스터'
  | '메르세데스'
  | '팬텀'
  | '루미너스'
  | '카이저'
  | '엔젤릭버스터'
  | '제로'
  | '은월'
  | '키네시스'
  | '카데나'
  | '일리움'
  | '아크'
  | '호영'
  | '아델'
  | '카인'
  | '라라'
  | '칼리';

interface CharacterInfoBase {
  date: string;
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: CharacterClass;
  character_class_level: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string;
  character_date_create: string;
  access_flag: string;
  liberation_quest_clear_flag: string;
}

interface ExpCharacterInfo extends CharacterInfoBase {
  add_character_exp: number;
}
