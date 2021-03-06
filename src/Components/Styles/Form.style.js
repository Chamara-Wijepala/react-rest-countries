import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.4rem;
  padding-block: 2.4rem;
  
  .SearchInput {
    display: grid;
    grid-template-columns: 2rem auto;
    gap: 1rem;
    background-color: ${({ theme }) => theme.element};
    color: ${({ theme }) => theme.text};
    padding: 1rem 2rem;
    border-radius: 5px;
    width: clamp(300px, 50vw, 500px);
    box-shadow: 0 0 5px rgba(0, 0, 0, .1);

    label {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 75%;
        height: 75%;
      }
    }

    input {
      background-color: inherit;
      color: inherit;
      border: none;
      outline: none;
    }
  }
`;

export default StyledForm;
