import "./App.css";
import CountryDAO from "./domain/country.dao";
import FetchAdapter from "./adpters/fetch.adapter";
import { Main } from "./pages/main";

const baseURL = "https://restcountries.com/v3.1";
const countryDao = new CountryDAO(new FetchAdapter(baseURL));

function App() {
  return (
    <div className="App container">
      <Main countryDao={countryDao} />
    </div>
  );
}

export default App;
