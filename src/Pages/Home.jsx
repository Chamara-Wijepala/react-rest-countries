import { useState, useEffect } from "react";

import fetchCountries from "../Helpers/fetchCountries";
import RenderForm from "../Components/RenderForm";
import RenderCountries from "../Components/RenderCountries";

const Home = () => {
  const [ allCountries, setAllCountries ] = useState([]);
  const [ countryList, setCountryList ] = useState([]);
  const [ state, setState ] = useState({
    searchQuery: '',
    region: ''
  });

  // Fetches data of all countries and store data in state to reduce API calls
  useEffect(() => {(
    async () => {
      const response = await fetchCountries();

      setAllCountries(response);
      setCountryList(response);
    }
  )()}, []);

  // Filters countries based on user input
  useEffect(() => {
    // Checks if selected region matches state.region AND if common OR official
    // country names match state.searchQuery
    const filteredCountries = allCountries.filter((country) => {
      return (country.region.includes(
          state.region
        )) && ((country.name.common.toLowerCase().includes(
          state.searchQuery.toLowerCase().trim()
        )) || (country.name.official.toLowerCase().includes(
          state.searchQuery.toLowerCase().trim()
        )));
    });

    // Mutates countryList state while keeping allCountries state intact
    setCountryList(filteredCountries);
  }, [state, allCountries]);

  // Handles input for searching by country name
  const handleChange = (event) => {
    const value = event.target.value;

    setState({
      ...state,
      searchQuery: value
    });
  }

  // Handles input for region filter
  const handleClick = (event) => {
    const text = event.target.textContent;

    // Declares value variable and assigns it the value of text IF text doesn't
    // have the value of 'All
    const value = text !== 'All' ? text : '';

    setState({
      ...state,
      region: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <div className="SearchFilter">
        <RenderForm {...{state, handleChange, handleClick, handleSubmit}} />
      </div>
      <div className="CountryList">
        {countryList.length > 0
          ? <RenderCountries countries={countryList} />
          : <h2>No matches found, try again</h2>
        }
      </div>
    </>
  )
}

export default Home;
