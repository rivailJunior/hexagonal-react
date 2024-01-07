import { HttpClient } from "../interfaces/HttpClient.interface";
import { CountryDaoInterface } from "./country.dao.interface";
import { Country } from "./country.interface";

export default class CountryDAO implements CountryDaoInterface {
  constructor(readonly httpClient: HttpClient) {}

  getCountry = async (countryName: string): Promise<Country[] | undefined> => {
    try {
      const data = await this.httpClient.get<Country[]>(
        `/name/${countryName}?fields=name,capital,currencies,flag`
      );
      return data;
    } catch (error) {
      // console.log(error);
    }
  };
}
