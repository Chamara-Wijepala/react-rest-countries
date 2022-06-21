import { useState, useEffect } from "react";
import RenderCountries from "../Components/RenderCountries";
import fetchCountries from "../Helpers/fetchCountries";

const Home = () => {
  const [ countries, setCountries ] = useState([]);
  const [ state, setState ] = useState({
    searchQuery: '',
    region: 'all'
  });

  // Fetches data of all countries depending on region and store data in state
  // Initially fetches all countries, then fetches again when a different
  // region is selected
  useEffect(() => {(
    async () => {
      const response = await fetchCountries(state.region);

      setCountries(response);
    }
  )()}, [state.region]);

  // Handles state change for both inputs
  const handleChange = (event) => {
    const value = event.target.value;

    setState({
      ...state,
      [event.target.name]: value
    });
  }

  // Handles submit for search input
  const handleSubmit = (event) => {
    event.preventDefault();

    // Filters countries by checking if the country's official name includes
    // at least a part of the searchQuery
    const filteredCountries = countries.filter((country) => {
      return country.name.official.toLowerCase().includes(
        state.searchQuery.toLowerCase().trim()
      );
    });

    setCountries(filteredCountries);
  }

  return (
    <>
      <div className="SearchFilter">
        <form onSubmit={handleSubmit}>
          <input
            name="searchQuery"
            value={state.searchQuery}
            onChange={handleChange}
            type="text"
            placeholder="Search for a country..."
          ></input>

          <select name="region" value={state.region} onChange={handleChange}>
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
      </div>

      <div className="CountryList">
        <RenderCountries countries={countries} />
      </div>
    </>
  )
}

export default Home;
