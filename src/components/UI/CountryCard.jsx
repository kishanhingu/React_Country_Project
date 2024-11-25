import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { capital, flags, name, population, region } = country;
  return (
    <li className="country-card card">
      <div className="container-card bg-blue-box">
        <img src={flags.svg} alt={name.common} />

        <div className="countryInfo">
          <p className="card-title">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p>
            <span className="card-description">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region: </span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital: </span>
            {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className="btn btn-darken btn-inline bg-white-box">
              Read More <FaArrowRightLong />
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
