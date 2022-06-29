import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.element};
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);

  .HeaderContentWrapper {
    display: flex;
    justify-content: space-between;
    padding-block: 1.4rem;

    h1 {
      font-size: clamp(1rem, 4vw, 1.8rem);
    }

    button {
      background-color: ${({ theme }) => theme.element};
      color: ${({ theme }) => theme.text};
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: .5rem;
      font-size: clamp(.8rem, 4vw, 1.2rem);
    }
  }
`;
