import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RenderCountries = ({ countries }) => {
  const numberFormat = new Intl.NumberFormat('en-US');

  return (
    // Maps through countries array and renders each country inside an anchor
    // tag which redirects to the country's specific details page
    countries.map((country, index) => (
      <Link key={index} to={country.cca3}>

        <div className="Country">
          <div className="Flag">
            <LazyLoadImage
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
            />
          </div>
        
          <div className="Info">
            <h2 className="CountryName">{country.name.common}</h2>
            <p>
              <span className="BoldText">Population: </span>
              {numberFormat.format(country.population)}
            </p>
            <p>
              <span className="BoldText">Region: </span>{country.region}
            </p>
            <p>
              <span className="BoldText">Capital: </span>{country.capital[0]}
            </p>
          </div>
        </div>

      </Link>
    ))
  )
}

export default RenderCountries;
