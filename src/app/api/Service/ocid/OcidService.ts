import Service from '../Service';

class OcidService extends Service {
  getOcid(name: string) {
    return this.http.get<{ ocid: string }>(`/id?character_name=${name}`);
  }
}

const ocidServiceInstance = new OcidService();

export default ocidServiceInstance;
