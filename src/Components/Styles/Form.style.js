import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-block: 2.4rem;
  
  .SearchInput {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.element};
    color: ${({ theme }) => theme.text};
    padding: 1rem 2rem;
    border-radius: 5px;
    width: clamp(300px, 50vw, 500px);

    input {
      background-color: inherit;
      color: inherit;
      border: none;
      outline: none;
    }
  }
`;

export default StyledForm;
