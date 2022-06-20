import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import fetchCountries from "./Helpers/fetchCountries";

const App = () => {
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
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/details/:id" element={<Details/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
