import styled from "styled-components";

const StyledDropdown = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.element};
  position: relative;
  border-radius: 5px;

  .DropdownBtn {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  .DropdownBtn,
  .DropdownContent {
    padding: 1.4rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    cursor: pointer;
  }
  
  .DropdownContent {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    position: absolute;
    background-color: inherit;
    top: 108%;
    border-radius: inherit;
    width: 100%;
  }
`;

export default StyledDropdown;
