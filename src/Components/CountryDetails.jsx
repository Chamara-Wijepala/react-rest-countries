import { Link } from "react-router-dom";

const CountryDetails = ({ country }) => {
  // Create a string of all the native names of the country
  const nativeNames = Object.values(country.name.nativeName)
    .map((name) => (name.common))
    .join(', ');

  // Creates a string of the country's capital or capitals
  const capital = Object.values(country.capital).join(', ');

  // Create a string of the currency or currencies used in the country
  const currencies = Object.values(country.currencies)
    .map((currency) => (currency.name))
    .join(', ');

  // Creates a string of the country's language or languages
  const languages = Object.values(country.languages).join(', ');

  // Creates a string of the country's top level domain or domains
  const tld = country.tld.join(', ');

  return (
    <>
      <h2>{country.name.common}</h2>

      <div>
        <p>
          <span className="BoldText">Native Name: </span> {nativeNames}
        </p>
        <p>
          <span className="BoldText">Population: </span> {country.population}
        </p>
        <p>
          <span className="BoldText">Region: </span> {country.region}
        </p>

        {/* Only render if data is available */}
        {country.subregion !== "" && 
          <p>
            <span className="BoldText">Subregion: </span> {country.subregion}
          </p>
        }
        {capital !== "" &&
          <p>
            <span className="BoldText">Capital: </span> {capital}
          </p>
        }
        {tld !== "" &&
          <p>
            <span className="BoldText">Top Level Domain: </span> {tld}
          </p>
        }

        <p>
          <span className="BoldText">Currencies: </span> {currencies}
        </p>
        <p>
          <span className="BoldText">Languages: </span> {languages}
        </p>
      </div>

      {/* Only renders if country borders other countries */}
      {country.borders.length > 0 &&
        <div>
          <p className="BoldText">Border Countries: </p>
          <ul>
            {country.borders.map((borderCountry, index) => (
              <Link key={index} to={`/${borderCountry}`} replace>
                <li>{borderCountry}</li>
              </Link>
            ))}
          </ul>
        </div>
      }
    </>
  )
}

export default CountryDetails;
