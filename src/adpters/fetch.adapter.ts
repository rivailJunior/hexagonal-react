import { HttpClient } from "../interfaces/HttpClient.interface";

//https://restcountries.com/#rest-countries

export default class FetchAdapter implements HttpClient {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`);
    const data = await response.json();
    if (data?.status === 404) {
      throw new Error("not found");
    }
    return data;
  }
}
