import styled from "styled-components";

export const StyledCountryDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 700px));
  justify-content: center;
  align-content: center;
  grid-gap: 40px;
  margin-bottom: 4rem;

  img {
    justify-self: center;
    align-self: center;
    max-width: 100%;
    height: 100%;
  }
`;
