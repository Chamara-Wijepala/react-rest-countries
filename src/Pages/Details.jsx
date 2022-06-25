import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import RenderCountryDetails from "../Components/RenderCountryDetails";

const Details = ({ allCountries }) => {
  const { id } = useParams();
  const [ country, setCountry ] = useState(allCountries);
  const [ borderCountries, setBorderCountries ] = useState([]);

  useEffect(() => {
    // Filters out all countries except the country that's cca3 matches URL id
    const filteredCountry = allCountries.filter((country) => {
      return country.cca3.includes(id)
    });

    // Similar to the logic above, it filters out all countries except the ones
    // that's cca3 matches the filteredCountry's bordering countries
    const filteredBorderCountries = allCountries.filter((country) => {
      return filteredCountry[0].borders.includes(country.cca3);
    });

    setCountry(filteredCountry);
    setBorderCountries(filteredBorderCountries);
  }, [id, allCountries]);

  return (
    <>
      {country.length > 0
        ? <RenderCountryDetails countryArray={country}/>
        : <h2>Loading...</h2>
      }
    </>
  )
}

export default Details;
