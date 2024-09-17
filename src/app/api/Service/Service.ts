import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface HTTPInstance {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

class Service {
  public http: HTTPInstance;

  private baseURL: string;

  private headers: Record<string, string>;

  constructor() {
    this.baseURL = `${process.env.NEXT_PUBLIC_MAPLE_OPEN_API_URL}`;
    this.headers = {
      'Content-Type': 'application/json',
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_OPEN_API_KEY || '',
    };

    this.http = {
      get: this.get.bind(this),
    };
  }

  private createAxiosInstance() {
    return axios.create({
      baseURL: this.baseURL,
      headers: this.headers,
    });
  }

  private async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const instance = this.createAxiosInstance();
      const response: AxiosResponse<T> = await instance.get(url, config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Axios 에러 처리
        throw error;
      } else {
        // 기타 에러 처리
        throw error;
      }
    }
  }
}

export default Service;
