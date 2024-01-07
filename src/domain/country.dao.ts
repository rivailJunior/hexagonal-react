import { HttpClient } from "../interfaces/HttpClient.interface";
import { CountryDaoInterface } from "./country.dao.interface";
import { Country } from "./country.interface";

export default class CountryDAO implements CountryDaoInterface {
  constructor(readonly httpClient: HttpClient) {}

  getCountry = async (countryName: string): Promise<Country[] | undefined> => {
    try {
      const data = await this.httpClient.get<Country[]>(`/name/${countryName}`);
      return data;
    } catch (error) {
      // TODO: remove console
      console.log(error);
    }
  };
}
