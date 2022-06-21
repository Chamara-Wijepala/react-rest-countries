import { useState, useEffect } from "react";
import fetchCountries from "../Helpers/fetchCountries";
import RenderForm from "../Components/RenderForm";
import RenderCountries from "../Components/RenderCountries";

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

    // Filters countries by checking if the country's common or official name
    // includes at least a part of the searchQuery
    const filteredCountries = countries.filter((country) => {
      return (country.name.common.toLowerCase().includes(
        state.searchQuery.toLowerCase().trim()
      )) || (country.name.official.toLowerCase().includes(
        state.searchQuery.toLowerCase().trim()
      ));
    });

    // Prevent replacing countries state with empty array
    if (filteredCountries.length > 0) {
      setCountries(filteredCountries);
    }
  }

  return (
    <>
      <div className="SearchFilter">
        <RenderForm {...{state, handleChange, handleSubmit}} />
      </div>

      <div className="CountryList">
        <RenderCountries countries={countries} />
      </div>
    </>
  )
}

export default Home;
