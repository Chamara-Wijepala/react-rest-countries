import { useState } from "react";

const Dropdown = ({ handleClick, options }) => {
  const [ isActive, setIsActive ] = useState(false);
  const [ selected, setSelected ] = useState('');

  return (
    <div className="Dropdown">

      <div className="DropdownBtn" onClick={() => {
        setIsActive(!isActive);
      }}>{selected || 'Filter By Region'}</div>

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
