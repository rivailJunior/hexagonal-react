import { HttpClient } from "../interfaces/HttpClient.interface";
import { CountryDaoInterface } from "./country.dao.interface";
import { Country } from "./country.interface";

export default class CountryDAO implements CountryDaoInterface {
  private limit = 10;
  constructor(readonly httpClient: HttpClient) {}

  getCountry = async (countryName: string): Promise<Country[] | undefined> => {
    try {
      const data = await this.httpClient.get<Country[]>(
        `/name/${countryName}?fields=name,capital,currencies,flag`
      );

      return data?.length > this.limit ? data.slice(0, this.limit) : data;
    } catch (error) {
      // console.log(error);
    }
  };
}
