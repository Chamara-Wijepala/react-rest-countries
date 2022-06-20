import RenderCountries from "../Components/RenderCountries";

const Home = ({ countries }) => {
  return (
    <>
      <div className="CountryList">
        <RenderCountries countries={countries} />
      </div>
    </>
  )
}

export default Home;
