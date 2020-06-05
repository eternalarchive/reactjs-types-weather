import React from 'react';
import styled from 'styled-components';


export const StyledCityBox = styled.li`
  background-color: rgba(255, 255, 255, 0.3);
  width: 30rem;
  height: 15rem;
`;

export const CityNametext = styled.span`

`;

function CityBox() {
  return (
    <StyledCityBox>
      <CityNametext>Seoul</CityNametext>
    </StyledCityBox>
  );
};

export default CityBox;
