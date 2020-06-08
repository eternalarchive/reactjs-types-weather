import React from 'react';
import Layout from '../components/common/Layout';
import * as S from '../components/PagesStyle';
import WeatherListContainer from '../containers/WeatherListContainer';
import SearchCityInputContainer from '../containers/SearchCityInputContainer';

function Home() {
  return (
    <Layout>
      <S.HomeLayout>
        <S.TitleArea>
          <S.HomeTitle>
            Hello,
            <br />
            Blue Weather
          </S.HomeTitle>
          <SearchCityInputContainer />
        </S.TitleArea>
        <WeatherListContainer />
      </S.HomeLayout>
    </Layout>
  );
}

export default Home;
