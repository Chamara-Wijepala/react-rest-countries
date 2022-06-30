import { useState } from "react";
import { GoChevronDown } from "react-icons/go"

import StyledDropdown from "./Styles/Dropdown.style";

const Dropdown = ({ handleClick, options }) => {
  const [ isActive, setIsActive ] = useState(false);
  const [ selected, setSelected ] = useState('');

  return (
    <StyledDropdown>

      <div
        className="DropdownBtn"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {selected || 'Filter By Region'}
        <GoChevronDown/>
      </div>

      {isActive && (
        <div className="DropdownContent">
          {options.map((option, index) => (
            <div
              key={index}
              className="DropdownItem"
              onClick={(event) => {
                handleClick(event);
                setIsActive(false);
                setSelected(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}

    </StyledDropdown>
  )
}

export default Dropdown;
