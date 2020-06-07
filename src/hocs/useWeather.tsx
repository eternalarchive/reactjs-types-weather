import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { rootState } from '../redux/modules/reducer';

function withAuth(Component: any, isDatas: boolean) {
  function WrappedComponent(props: any) {
    const selectedDatas = useSelector((state: rootState) => state.view.selectedDatas);

    if (!isDatas) {
      if (!selectedDatas.length) {
        return <Redirect to="/" />;
      }
    }

    return <Component {...props} />;
  }
  WrappedComponent.displayName = `withWeather(${Component.name})`;
  return WrappedComponent;
}

withAuth.defaultProps = {
  isDatas: true,
}

export default withAuth;
