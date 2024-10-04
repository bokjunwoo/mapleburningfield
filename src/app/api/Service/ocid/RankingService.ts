import Service from '../Service';

class RankingService extends Service {
  getOverallRanking(date: string) {
    return this.http.get<{ ocid: string }>(`/ranking/overall?date=${date}`);
  }
}

const rankingServiceInstance = new RankingService();

export default rankingServiceInstance;
