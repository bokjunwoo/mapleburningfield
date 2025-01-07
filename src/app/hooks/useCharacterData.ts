import { useSetRecoilState } from 'recoil';
import characterServiceInstance from '../api/Service/ocid/CharacterService';
import ocidServiceInstance from '../api/Service/ocid/OcidService';
import UnionServiceInstance from '../api/Service/ocid/UnionService';
import {
  characterInfoState,
  characterOcidState,
} from '../atoms/characterInfoState';
import characterLevelState from '../atoms/characterLevelState';
import { errorMessageState } from '../atoms/errorMessageState';
import { eventBuffExpContentState, expRateState } from '../atoms/expRateState';
import { itemDropRateState } from '../atoms/itemDropState';
import { mesoDropRateState } from '../atoms/mesoDropState';
import { portalState } from '../atoms/portalState';
import { regionListState } from '../atoms/regionListState';
import { ALL_REGIONS } from '../constants/region';
import { validateCharacterInfo, getclasses } from '../utils/api/charater';
import { getErrorMessage } from '../utils/api/error';
import { findEventWorld } from '../utils/api/server';
import { findNearestQuestRegion } from '../utils/exp';
import { levelByExpEventBuff } from '../utils/portal';
import { processCharacterData } from '../utils/process';

const useCharacterData = (characterName: string) => {
  const setCharacterInfo = useSetRecoilState(characterInfoState);
  const setCharacterLevel = useSetRecoilState(characterLevelState);
  const setCharacterOcid = useSetRecoilState(characterOcidState);
  const setExpRate = useSetRecoilState(expRateState);
  const setItemDropRate = useSetRecoilState(itemDropRateState);
  const setMesoDropRate = useSetRecoilState(mesoDropRateState);
  const setPortalRate = useSetRecoilState(portalState);
  const setEventBuffExpContentRate = useSetRecoilState(
    eventBuffExpContentState,
  );
  const setRegionList = useSetRecoilState(regionListState);
  const setError = useSetRecoilState(errorMessageState);

  // eslint-disable-next-line consistent-return
  const fetchCharacterData = async () => {
    try {
      const characterOcid = await ocidServiceInstance.getOcid(characterName);
      const { ocid } = characterOcid;

      const characterInfo = await characterServiceInstance.getBaseInfo(ocid);
      validateCharacterInfo(characterInfo);

      const { classBishop, classNightLoad, classShadower, eventBuff } =
        await getclasses(ocid, characterInfo.character_class);

      const isEventWorld = findEventWorld(characterInfo);

      const [
        hyperStat,
        ability,
        linkSkill,
        vmatrix,
        hexaMatrix,
        itemEquipment,
        cashItemEquipment,
        symbol,
        unionRaider,
        unionArtifact,
      ] = await Promise.all([
        characterServiceInstance.getHyperStat(ocid),
        characterServiceInstance.getAbility(ocid),
        characterServiceInstance.getLinkSkill(ocid),
        characterServiceInstance.getVmatrix(ocid),
        characterServiceInstance.getHexaMatrix(ocid),
        characterServiceInstance.getItemEquipment(ocid),
        characterServiceInstance.getCashItemEquipment(ocid),
        characterServiceInstance.getSymbol(ocid),
        UnionServiceInstance.getUnionRaider(ocid),
        UnionServiceInstance.getUnionArtifact(ocid),
      ]);

      const processedData = processCharacterData({
        isEventWorld,
        hyperStat,
        ability,
        linkSkill,
        vmatrix,
        hexaMatrix,
        itemEquipment,
        cashItemEquipment,
        symbol,
        classBishop,
        classNightLoad,
        classShadower,
        eventBuff,
        unionRaider,
        unionArtifact,
      });

      // 상태 업데이트
      setCharacterInfo(characterInfo);
      setCharacterLevel(characterInfo.character_level);
      setCharacterOcid(ocid);
      setExpRate(processedData.processedExpData);
      setItemDropRate(processedData.processedItemDropData);
      setMesoDropRate(processedData.processedMesoDropData);
      setPortalRate((prev) => ({
        ...prev,
        eventBuffLevel: levelByExpEventBuff(eventBuff.portalAdditionalExpRate),
      }));
      setEventBuffExpContentRate({
        araneRiverAdditionalExpRate: eventBuff.araneRiverAdditionalExpRate,
        grandisAdditionalExpRate: eventBuff.grandisAdditionalExpRate,
        monsterParkAdditionalExpRate: eventBuff.monsterParkAdditionalExpRate,
      });
      setRegionList([
        findNearestQuestRegion(characterInfo.character_level, ALL_REGIONS),
      ]);

      return { characterInfo, processedData };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const code = err.response.data.error.name;
      setError(getErrorMessage(code));
    }
  };

  const resetData = () => {
    setCharacterInfo({
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
    });
    setCharacterLevel(260);
    setCharacterOcid('');
    setExpRate([]);
    setItemDropRate([]);
    setMesoDropRate([]);
    setRegionList([findNearestQuestRegion(260, ALL_REGIONS)]);
  };

  return {
    fetchCharacterData,
    resetData,
  };
};

export default useCharacterData;
