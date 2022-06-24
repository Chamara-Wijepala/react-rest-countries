import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import RenderCountryDetails from "../Components/RenderCountryDetails";

const Details = ({ allCountries }) => {
  const { id } = useParams();
  const [ country, setCountry ] = useState(allCountries);

  // Filters out all countries except the country that's cca3 matches URL id
  useEffect(() => {
    const filteredCountry = allCountries.filter((country) => {
      return country.cca3.includes(id)
    });

    setCountry(filteredCountry);
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
