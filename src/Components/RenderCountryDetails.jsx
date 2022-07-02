import CountryDetails from "./CountryDetails";
import { StyledCountryDetails } from "./Styles/DetailsPage.style";

const RenderCountryDetails = ({ country }) => {
  return (
    <StyledCountryDetails>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
      ></img>
      {/* Only renders if coat of arms exists */}
      {country.coatOfArms.svg !== "" &&
        <img
          className="COA"
          src={country.coatOfArms.svg}
          alt={`Coat of arms of ${country.name.common}`}
        ></img>
      }

      <CountryDetails country={country}/>
    </StyledCountryDetails>
  )
}

export default RenderCountryDetails;
