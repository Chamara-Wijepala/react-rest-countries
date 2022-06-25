import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import RenderCountryDetails from "../Components/RenderCountryDetails";

const Details = ({ allCountries }) => {
  const { id } = useParams();
  const [ currentCountry, setCurrentCountry ] = useState(allCountries);

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

    // Creates an array of objects containing the name and cca3 of bordering
    // countries. Creates an empty array if there are no bordering countries
    const borders = filteredBorderCountries.map((country) => (
      filteredCountry[0].borders.includes(country.cca3)
        ? { "name": country.name.common, "code": country.cca3 }
        : 'hi'
    ));

    filteredCountry[0].borders = borders;

    setCurrentCountry(filteredCountry);
  }, [id, allCountries]);

  return (
    <>
      {currentCountry.length > 0
        ? <RenderCountryDetails countryArray={currentCountry}/>
        : <h2>Loading...</h2>
      }
    </>
  )
}

export default Details;
