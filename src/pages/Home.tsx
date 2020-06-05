import React from 'react';
import Layout from '../components/common/Layout';
import * as S from '../components/PagesStyle';
import styled from 'styled-components';
import WeatherListContainer from '../container/WeatherListContainer';
import SearchCityInputContainer from '../container/SearchCityInputContainer';

function Home() {
  return (
    <Layout>
      <S.HomeLayout>
        <S.TitleArea>
          <S.HomeTitle>Hello,<br />Blueweather</S.HomeTitle>
          <SearchCityInputContainer />
        </S.TitleArea>
        <WeatherListContainer />
      </S.HomeLayout>
    </Layout>
  );
};

export default Home;
