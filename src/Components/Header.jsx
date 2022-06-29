import { StyledHeader } from "./Styles/Header.style";

const Header = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <div className="HeaderContentWrapper">
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </StyledHeader>
  );
}

export default Header;
