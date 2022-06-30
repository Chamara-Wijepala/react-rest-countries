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

export const BoxShadowButton = styled(StyledButton)`
  padding: .5rem 1.2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  border-radius: 5px;
`;

export const BackButton = styled(BoxShadowButton)`
  margin-block: 3.6rem;
`;

export const BorderButton = styled(BoxShadowButton)`
  font-size: clamp(.4rem, 4vw, .8rem);
`;
