import { BiSearchAlt2 } from 'react-icons/bi';

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
      <div>
        <BiSearchAlt2/>
        <input
          name="searchQuery"
          value={state.searchQuery}
          onChange={handleChange}
          type="text"
          placeholder="Search for a country..."
        ></input>
      </div>

      <Dropdown {...{handleClick, options}} />
    </form>
  )
}

export default RenderForm;
