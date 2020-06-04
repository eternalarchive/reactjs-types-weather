import React from 'react';
import Layout from '../components/common/Layout';
import SearchCityInput from '../components/common/SearchCityInput';
import WeatherBox from '../components/WeatherList/WeatherBox';
import styled from 'styled-components';

const StyledHomeTitle = styled.h2`
  font-size: 7.2rem;
`;

function Home() {
  return (
    <Layout>
      <div>
        <StyledHomeTitle>Hello,<br />Blueweather</StyledHomeTitle>
        <SearchCityInput />
      </div>
      <WeatherBox />
    </Layout>
  );
};

export default Home;
