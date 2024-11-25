import { useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../API/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountriesData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountryFunction = (curCountry) => {
    if (search) {
      return curCountry.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
    }
    return curCountry;
  };

  const filterCountryFunction = (curCountry) => {
    if (filter === "all") {
      return curCountry;
    }
    return curCountry.region.toLowerCase() === filter;
  };

  // Search Filter
  const searchCountry = countries.filter(
    (curCountry) =>
      searchCountryFunction(curCountry) && filterCountryFunction(curCountry)
  );

  // const searchCountry = countries.filter((curCountry) => {
  //   if (search) {
  //     return curCountry.name.common
  //       .toLowerCase()
  //       .includes(search.toLowerCase());
  //   }
  //   return curCountry;
  // });

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <div className="container">
        <ul className="grid grid-four-column">
          {searchCountry.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
};
