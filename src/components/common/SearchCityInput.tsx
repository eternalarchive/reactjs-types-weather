import React from 'react';
import styled from 'styled-components';

const StyledCityInput = styled.input`
  background-color: rgba(255, 255, 255, 0);
  width: 30rem;
  font-size: 2.4rem;
  border: 0;
  border-bottom: 3px solid white;
  padding: 10px 40px 10px 5px;
  outline: none;
  ::placeholder {
    color: inherit;
  }
`;

const StyledSearchButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  width: 3rem;
  height: 3rem;
  border: 0;
  margin: 10px 0 0 -35px;
`;

const StyledButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;

type SearchCityInputProps = {

};

function SearchCityInput({}: SearchCityInputProps) {
  const SearchCity = (e: React.KeyboardEvent<HTMLInputElement>) => {

  };

  const SearchCityOnButton = () => {

  };

  return (
    <>
      <StyledCityInput
        onKeyPress={(e) => SearchCity(e)}
        placeholder="Enter your City!"
        autoFocus={true}
      />
      <StyledSearchButton onClick={SearchCityOnButton}>
        <StyledButtonImg src="/icons/icon-mag-light.png" alt="search button"/>
      </StyledSearchButton>
    </>
  );
};

export default SearchCityInput;
