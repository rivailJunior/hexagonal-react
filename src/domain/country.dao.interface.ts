import { Country } from "./country.interface";

export interface CountryDaoInterface {
  getCountry(countryName: string): Promise<Country[] | undefined>;
}
