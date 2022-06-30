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
  }
`;
