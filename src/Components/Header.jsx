import { StyledHeader } from "./Styles/Header.style";

const Header = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </StyledHeader>
  );
}

export default Header;
