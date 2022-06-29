import { StyledHeader } from "./Styles/Header.style";
import { MdDarkMode } from 'react-icons/md';

const Header = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <div className="HeaderContentWrapper">
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}><MdDarkMode/> Toggle Theme</button>
      </div>
    </StyledHeader>
  );
}

export default Header;
