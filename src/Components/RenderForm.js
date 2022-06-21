const RenderForm = ({ state, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="searchQuery"
        value={state.searchQuery}
        onChange={handleChange}
        type="text"
        placeholder="Search for a country..."
      ></input>

      <select name="region" value={state.region} onChange={handleChange}>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  )
}

export default RenderForm;
