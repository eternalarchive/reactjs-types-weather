import React, { useCallback } from 'react';
import LightDartModeButton from '../components/Header/LightDarkModeButton';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../redux/modules/reducer';
import { SelectModeSaga } from '../redux/modules/view';

function ModeContainer() {
  const mode: string = useSelector((state: rootState) => state.view.mode);
  const dispatch = useDispatch();

  const changeMode = useCallback(
    (mode: string) => {
      dispatch(SelectModeSaga(mode));
    },
    [dispatch],
  );

  return <LightDartModeButton mode={mode} changeMode={changeMode} />;
}

export default ModeContainer;
