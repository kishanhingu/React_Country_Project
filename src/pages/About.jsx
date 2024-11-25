import countryData from "../API/countryData.json";

export const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <h2 className="container-title">
          Here are the Interesting Facts
          <br />
          we&#180;re pround of
        </h2>

        <div className="gradient-cards">
          {countryData.map((curEle) => {
            const { id, countryName, capital, population, interestingFact } =
              curEle;
            return (
              <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  <p className="card-title">{countryName}</p>
                  <p>
                    <span className="card-description">Capital: </span>
                    {capital}
                  </p>
                  <p>
                    <span className="card-description">Population: </span>
                    {population}
                  </p>
                  <p>
                    <span className="card-description">InterestingFact: </span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
