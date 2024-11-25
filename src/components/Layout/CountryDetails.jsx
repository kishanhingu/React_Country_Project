import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { individualCountry } from "../../API/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await individualCountry(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-blue-box">
        {country && (
          <div className="country-image grid grid-two-column">
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="flag"
            />

            <div className="country-content">
              <p className="card-title">{country.name.official}</p>

              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description">Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description">Capita: </span>
                  {country.capital}
                </p>
                <p>
                  <span className="card-description">Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description">Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curEle) => country.currencies[curEle].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((curEle) => country.languages[curEle])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
