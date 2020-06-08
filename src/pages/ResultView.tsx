import React from 'react';
import Layout from '../components/common/Layout';
import FiveDaysContainer from '../containers/FiveDaysContainer';
import withWeather from '../hocs/useWeather';

function ResultView() {
  return (
    <Layout>
      <FiveDaysContainer />
    </Layout>
  );
}

export default withWeather(ResultView, false);
