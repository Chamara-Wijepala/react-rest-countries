import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { ThemeProvider } from "styled-components";

import fetchCountries from "./Helpers/fetchCountries";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { GlobalStyles, lightTheme, darkTheme } from "./Global.style";

const App = () => {
  const [ allCountries, setAllCountries ] = useState([]);
  const [ isFetching, setIsFetching ] = useState(true);
  const [ theme, setTheme ] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  };
  
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
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <BrowserRouter>
          <Header toggleTheme={toggleTheme}/>
          <main>
            <div className="MainContentWrapper">
              {!isFetching
                ? <Routes>
                    <Route path="/" element={<Home {...{allCountries}}/>}></Route>
                    <Route path="/:id" element={<Details {...{allCountries}}/>}></Route>
                  </Routes>
                : <PulseLoader color="#36D7B7"/>
              }
            </div>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
