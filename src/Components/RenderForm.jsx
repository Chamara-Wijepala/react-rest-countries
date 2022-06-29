import { BiSearchAlt2 } from 'react-icons/bi';

import Dropdown from "./Dropdown";
import StyledForm from './Styles/Form.style';

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
    <StyledForm onSubmit={handleSubmit}>
      <div className='SearchInput'>
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
    </StyledForm>
  )
}

export default RenderForm;
