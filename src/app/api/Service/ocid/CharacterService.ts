import Service from '../Service';

class CharacterService extends Service {
  private basePath = 'character';

  getBaseInfo(ocid: string) {
    return this.http.get<CharacterInfoBase>(
      `${this.basePath}/basic?ocid=${ocid}`,
    );
  }

  getHyperStat(ocid: string) {
    return this.http.get<CharacterHyperStat>(
      `${this.basePath}/hyper-stat?ocid=${ocid}`,
    );
  }

  getAbility(ocid: string) {
    return this.http.get<CharacterAbility>(
      `${this.basePath}/ability?ocid=${ocid}`,
    );
  }

  getLinkSkill(ocid: string) {
    return this.http.get<CharacterLinkSkill>(
      `${this.basePath}/link-skill?ocid=${ocid}`,
    );
  }

  getVmatrix(ocid: string) {
    return this.http.get<CharacterVCoreEquipment>(
      `${this.basePath}/vmatrix?ocid=${ocid}`,
    );
  }

  getHexaMatrix(ocid: string) {
    return this.http.get<CharacterHexaCoreEquipment>(
      `${this.basePath}/hexamatrix?ocid=${ocid}`,
    );
  }

  getItemEquipment(ocid: string) {
    return this.http.get<CharacterItemEquipment>(
      `${this.basePath}/item-equipment?ocid=${ocid}`,
    );
  }

  getCashItemEquipment(ocid: string) {
    return this.http.get<CharacterCashItemEquipment>(
      `${this.basePath}/cashitem-equipment?ocid=${ocid}`,
    );
  }

  getSkill(ocid: string, skillGrade: string) {
    return this.http.get<CharacterSkill>(
      `${this.basePath}/skill?ocid=${ocid}&character_skill_grade=${skillGrade}`,
    );
  }

  getSymbol(ocid: string) {
    return this.http.get<CharacterSymbol>(
      `${this.basePath}/symbol-equipment?ocid=${ocid}`,
    );
  }
}

const characterServiceInstance = new CharacterService();

export default characterServiceInstance;
