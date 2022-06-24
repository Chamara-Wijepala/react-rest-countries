import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import fetchCountries from "./Helpers/fetchCountries";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

const App = () => {
  const [ allCountries, setAllCountries ] = useState([]);
  
  // Fetches data of all countries and store data in state to reduce API calls
  useEffect(() => {(
    async () => {
      const response = await fetchCountries();

      setAllCountries(response);
    }
  )()}, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home {...{allCountries}}/>}></Route>
            <Route path="/:id" element={<Details {...{allCountries}}/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
