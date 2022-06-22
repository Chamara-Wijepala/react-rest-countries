import { useState } from "react";
import { GoChevronDown } from "react-icons/go"

const Dropdown = ({ handleClick, options }) => {
  const [ isActive, setIsActive ] = useState(false);
  const [ selected, setSelected ] = useState('');

  return (
    <div className="Dropdown">

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

    </div>
  )
}

export default Dropdown;
