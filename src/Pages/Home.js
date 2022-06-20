import { useState, useEffect } from "react";
import RenderCountries from "../Components/RenderCountries";
import fetchCountries from "../Helpers/fetchCountries";

const Home = () => {
  const [ countries, setCountries ] = useState([]);

  // Fetch data of all countries after first render and store data in state
  useEffect(() => {(
    async () => {
      const response = await fetchCountries();

      setCountries(response);
    }
  )()}, []);

  return (
    <>
      <div className="CountryList">
        <RenderCountries countries={countries} />
      </div>
    </>
  )
}

export default Home;
