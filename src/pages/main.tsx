import { useEffect, useState } from "react";
import useCountry from "../hooks/useCountry";
import { Combobox } from "../components/combobox";
import CountryDAO from "../domain/country.dao";

export const Main = ({ countryDao }: { countryDao: CountryDAO }) => {
  const [country, setCountry] = useState("");
  const { countryList, getCountries } = useCountry(countryDao.getCountry);

  useEffect(() => {
    if (country.length > 2) {
      getCountries(country);
    }
  }, [country]);

  return (
    <Combobox value={country} setValue={setCountry}>
      {countryList?.map((country) => (
        <Combobox.Option
          key={country.name.common}
          value={country.name.common}
          flag={country.flag}
        />
      ))}
    </Combobox>
  );
};
