import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: clamp(.8rem, 4vw, 1.2rem);
`;
