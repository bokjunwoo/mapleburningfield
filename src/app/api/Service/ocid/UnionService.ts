import Service from '../Service';

class UnionService extends Service {
  private basePath = 'user';

  getUnionRaider(ocid: string) {
    return this.http.get<UnionRaider>(
      `${this.basePath}/union-raider?ocid=${ocid}`,
    );
  }

  getUnionArtifact(ocid: string) {
    return this.http.get<UnionArtifact>(
      `${this.basePath}/union-artifact?ocid=${ocid}`,
    );
  }
}

const UnionServiceInstance = new UnionService();

export default UnionServiceInstance;
