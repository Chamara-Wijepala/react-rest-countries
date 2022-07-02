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
  }

  .COA {
    height: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

export const GeneralInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
