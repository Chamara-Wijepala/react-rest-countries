const Home = ({ countries }) => {
  return (
    // Maps through countries array and renders each country inside an anchor
    // tag which redirects to the country's specific details page
    countries.map((country, index) => (
      <a key={index} href={`details/${country.cca3}`}>

        <div className="Country">
          <div className="Flag">
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`}></img>
          </div>
        
          <div className="Info">
            <h2 className="CountryName">{country.name.common}</h2>
            <p>
              <span className="BoldText">Population: </span>{country.population}
            </p>
            <p>
              <span className="BoldText">Region: </span>{country.region}
            </p>
            <p>
              <span className="BoldText">Capital: </span>{country.capital[0]}
            </p>
          </div>
        </div>

      </a>
    ))
  )
}

export default Home;
