import React, { createRef } from 'react';
import styled from 'styled-components';

const StyledInputArea = styled.div``;

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
    font-size: 1.6rem;
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
};

function SearchCityInput({ getWeather }: SearchCityInputProps) {
  const cityInputRef: React.RefObject<HTMLInputElement> = createRef();

  const SearchCity = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regexr = /[ㄱ-ㅎㅏ-ㅣ]+/g;
    if (!cityInputRef.current) return;
    if (regexr.test(cityInputRef.current.value))
      return (cityInputRef.current.value = '');
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
        onKeyUp={(e) => SearchCity(e)}
        placeholder="ENTER YOUR CITY IN ENGLISH!"
        autoFocus={true}
        ref={cityInputRef}
      />
      <StyledSearchButton onClick={SearchCityOnButton}>
        <i className="fas fa-search"></i>
      </StyledSearchButton>
    </StyledInputArea>
  );
}

export default SearchCityInput;
