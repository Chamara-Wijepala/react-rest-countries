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
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  )
}

export default RenderForm;
