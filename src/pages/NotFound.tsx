import React from 'react';
import Layout from '../components/common/Layout';
import * as S from '../components/PagesStyle';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Layout>
      <S.TitleArea>
        <S.HomeTitle>
          Sorry,
          <br />
          <Link to="/">
            Back To Home
            <i className="fas fa-home" />
          </Link>
        </S.HomeTitle>
      </S.TitleArea>
    </Layout>
  );
}

export default NotFound;
