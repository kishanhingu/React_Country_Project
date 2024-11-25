import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountriesData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD FOR INDVI. COUNTRY NAME
export const individualCountry = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
