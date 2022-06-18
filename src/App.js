import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/details" element={<Details/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
