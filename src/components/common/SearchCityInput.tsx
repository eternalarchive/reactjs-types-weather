import React, { createRef } from 'react';
import styled from 'styled-components';

const StyledInputArea = styled.div`
`;

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
  margin: 10px 0 0 -35px;
  outline: none;
  cursor: pointer;
`;

type SearchCityInputProps = {
  getWeather: (cityName: string) => void;
  loading: boolean;
  error: null | {};
};

function SearchCityInput({ getWeather, loading, error }: SearchCityInputProps) {
  const cityInputRef: React.RefObject<HTMLInputElement> = createRef();

  const SearchCity = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!cityInputRef.current) return;
    const cityName = cityInputRef.current.value.trim();
    if (e.key === 'Enter' && cityName !== '') {
      getWeather(cityName);
      cityInputRef.current.value = '';
    }
  };

  const SearchCityOnButton = () => {
    if (!cityInputRef.current) return;
    const cityName = cityInputRef.current.value.trim();
    if (cityName !== '') {
      getWeather(cityName);
      cityInputRef.current.value = '';
    }
  };

  return (
    <StyledInputArea>
      <StyledCityInput
        onKeyPress={(e) => SearchCity(e)}
        placeholder="Enter your City!"
        autoFocus={true}
        ref={cityInputRef}
      />
      <StyledSearchButton onClick={SearchCityOnButton}>
      <i className="fas fa-search"></i>
      </StyledSearchButton>
    </StyledInputArea>
  );
};

export default SearchCityInput;
