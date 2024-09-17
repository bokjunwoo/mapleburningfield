import 고통의미궁 from './map/고통의미궁';
import 도원경 from './map/도원경';
import 레헬른 from './map/레헬른';
import 리멘 from './map/리멘';
import 리버스시티 from './map/리버스시티';
import 모라스 from './map/모라스';
import 문브릿지 from './map/문브릿지';
import 불타는세르니움 from './map/불타는세르니움';
import 세르니움 from './map/세르니움';
import 셀라스 from './map/셀라스';
import 소멸의여로 from './map/소멸의여로';
import 아르카나 from './map/아르카나';
import 아르테리아 from './map/아르테리아';
import 얌얌아일랜드 from './map/얌얌아일랜드';
import 에스페라 from './map/에스페라';
import 오디움 from './map/오디움';
import 츄츄아일랜드 from './map/츄츄아일랜드';
import 카르시온 from './map/카르시온';
import 탈라하트 from './map/탈라하트';
import 호텔아르크스 from './map/호텔아르크스';

export const map: MapData = {
  소멸의여로,
  리버스시티,
  츄츄아일랜드,
  얌얌아일랜드,
  레헬른,
  아르카나,
  모라스,
  에스페라,
  셀라스,
  문브릿지,
  고통의미궁,
  리멘,
  세르니움,
  불타는세르니움,
  호텔아르크스,
  오디움,
  도원경,
  아르테리아,
  카르시온,
  탈라하트,
};

export const questMap: QuestMapData = {
  소멸의여로: 소멸의여로[21].mobs[0].exp,
  츄츄아일랜드: 츄츄아일랜드[12].mobs[0].exp,
  레헬른: 레헬른[5].mobs[0].exp,
  아르카나: 아르카나[3].mobs[0].exp,
  모라스: 모라스[8].mobs[0].exp,
  에스페라: 에스페라[6].mobs[0].exp,
  문브릿지: 문브릿지[0].mobs[0].exp,
  고통의미궁: 고통의미궁[0].mobs[0].exp,
  리멘: 리멘[15].mobs[0].exp,
  세르니움: 세르니움[13].mobs[0].exp,
  호텔아르크스: 호텔아르크스[2].mobs[0].exp,
  오디움: 오디움[4].mobs[0].exp,
  도원경: 도원경[6].mobs[0].exp,
  아르테리아: 아르테리아[10].mobs[0].exp,
  카르시온: 카르시온[17].mobs[0].exp,
  탈라하트: 탈라하트[21].mobs[0].exp,
};
