import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import StyledCountryList from "./Styles/CountryList.style";
import StyledCountryCard from "./Styles/CountryCard.style";

const RenderCountries = ({ countries }) => {
  const numberFormat = new Intl.NumberFormat('en-US');

  return (
    // Maps through countries array and renders each country inside an anchor
    // tag which redirects to the country's specific details page
    <StyledCountryList>
      {countries.map((country, index) => (
        <Link key={index} to={`/${country.cca3}`} replace>

          <StyledCountryCard>
            <LazyLoadImage
              className="Flag"
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
            />
          
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
          </StyledCountryCard>

        </Link>
      ))}
    </StyledCountryList>
  )
}

export default RenderCountries;
