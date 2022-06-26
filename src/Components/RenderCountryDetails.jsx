import CountryDetails from "./CountryDetails";

const RenderCountryDetails = ({ country }) => {
  return (
    <div className="CountryDetails">
      <img
        className="Flag"
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
      ></img>

      {/* Only renders if coat of arms exists */}
      {country.coatOfArms.svg !== "" &&
        <img
          className="CoatOfArms"
          src={country.coatOfArms.svg}
          alt={`Coat of arms of ${country.name.common}`}
        ></img>
      }

      <div className="Details">
        <CountryDetails country={country}/>
      </div>
    </div>
  )
}

export default RenderCountryDetails;
