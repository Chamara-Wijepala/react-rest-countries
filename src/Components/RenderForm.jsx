import Dropdown from "./Dropdown";

const RenderForm = ({ state, handleChange, handleClick, handleSubmit }) => {
  const options = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ]

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="searchQuery"
        value={state.searchQuery}
        onChange={handleChange}
        type="text"
        placeholder="Search for a country..."
      ></input>

      <Dropdown {...{handleClick, options}} />
    </form>
  )
}

export default RenderForm;
