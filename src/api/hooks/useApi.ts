import axios from "axios";

export class useApi {
  error: String | null = null;

  api = axios.create({
    baseURL: this.baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  constructor(public baseUrl: string) {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  request = async (
    method: string,
    endpoint: string,
    body: any = null,
    config: any = {}
  ) => {
    this.error = null;
    try {
      const response = await this.api.request({
        method,
        url: endpoint,
        data: body,
        ...config,
      });
      return response.data;
    } catch (error: any) {
      this.error = error.message || error.toString();
      throw error;
    }
  };

  GET = (endpoint: string, config: any = {}) =>
    this.request("get", endpoint, null, config);
  POST = (endpoint: string, body: any) => this.request("post", endpoint, body);
  PUT = (endpoint: string, body: any) => this.request("put", endpoint, body);
  DELETE = (endpoint: string) => this.request("delete", endpoint);
}
