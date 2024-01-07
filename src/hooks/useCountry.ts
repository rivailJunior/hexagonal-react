import { useState } from "react";
import { Country } from "../domain/country.interface";
import CountryDAO from "../domain/country.dao";

export default function useCountry(get: CountryDAO["getCountry"]) {
  const [countryList, setCountryList] = useState<Country[] | undefined>([]);
  const getCountries = async (country: string) => {
    try {
      const countries = await get(country);
      setCountryList(countries);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    countryList,
    getCountries,
    setCountryList,
  };
}
