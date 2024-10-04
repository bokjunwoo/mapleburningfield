import Service from '../Service';

class RankingService extends Service {
  getOverallRanking(date: string, worldType: '0' | '1') {
    return this.http.get<{ ocid: string }>(
      `/ranking/overall?date=${date}&world_type=${worldType}`,
    );
  }
}

const rankingServiceInstance = new RankingService();

export default rankingServiceInstance;
