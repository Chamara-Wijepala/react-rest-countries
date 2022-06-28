import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

import fetchCountries from "./Helpers/fetchCountries";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import GlobalStyles from "./Components/Styles/Global";

const App = () => {
  const [ allCountries, setAllCountries ] = useState([]);
  const [ isFetching, setIsFetching ] = useState(true);
  
  // Fetches data of all countries and store data in state to reduce API calls
  useEffect(() => {(
    async () => {
      const response = await fetchCountries();

      setAllCountries(response);
      setIsFetching(false);
    }
  )()}, []);

  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Header />
        <main>
          {!isFetching
            ? <Routes>
                <Route path="/" element={<Home {...{allCountries}}/>}></Route>
                <Route path="/:id" element={<Details {...{allCountries}}/>}></Route>
              </Routes>
            : <PulseLoader color="#36D7B7"/>
          }
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
