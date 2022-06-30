import { StyledHeader } from "./Styles/Header.style";
import { MdDarkMode } from 'react-icons/md';

import { StyledButton } from "./Styles/Button.style";

const Header = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <div className="HeaderContentWrapper">
        <h1>Where in the world?</h1>
        <StyledButton onClick={toggleTheme}><MdDarkMode/> Toggle Theme</StyledButton>
      </div>
    </StyledHeader>
  );
}

export default Header;
