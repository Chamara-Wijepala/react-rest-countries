import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { BsArrowLeft } from 'react-icons/bs';

import RenderCountryDetails from "../Components/RenderCountryDetails";
import { BackButton } from "../Components/Styles/Button.style";

const Details = ({ allCountries }) => {
  const { id } = useParams();
  const [ currentCountry, setCurrentCountry ] = useState(allCountries);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    // Filters out all countries except the country that's cca3 matches URL id
    const filteredCountry = allCountries.filter((country) => {
      return country.cca3.includes(id.toUpperCase());
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
        : null
    ));

    // Creates a new object with all properties from filteredCountry and adds
    // new borders array to it
    const countryObject = {
      ...filteredCountry[0],
      borders: borders
    };

    setCurrentCountry(countryObject);
    setIsLoading(false);
  }, [id, allCountries]);

  return (
    <>
      <Link to={'/'}>
        <BackButton className="hi"><BsArrowLeft/> Back</BackButton>
      </Link>
      {isLoading
        ? <PulseLoader color="#36D7B7"/>
        : <RenderCountryDetails country={currentCountry}/>
      }
    </>
  )
}

export default Details;
