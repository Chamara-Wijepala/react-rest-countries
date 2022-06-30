import styled from "styled-components";

const StyledCountryCard = styled.div`
  background-color: ${({ theme }) => theme.element};
  width: 312px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);

  .Flag {
    max-width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
  }

  .Info {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .CountryName {
      margin: .5rem 0;
      font-size: 1.4rem;
    }
  }
`;

export default StyledCountryCard;
