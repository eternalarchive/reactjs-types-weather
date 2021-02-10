import React from 'react';
import FiveDaysList from '../components/FiveDaysList';
import { useSelector } from 'react-redux';
import { rootState } from '../redux/modules/reducer';
import { Tforecast, TWeather } from '../redux/modules/types';

function FiveDaysContainer() {
  const mode: string = useSelector((state: rootState) => state.view.mode);
  const selectedNow: TWeather[] = useSelector(
    (state: rootState) => state.view.selectedNow,
  );
  const selectedDatas: Tforecast[] = useSelector(
    (state: rootState) => state.view.selectedDatas,
  );

  return (
    <FiveDaysList
      mode={mode}
      selectedNow={selectedNow}
      selectedDatas={selectedDatas}
    />
  );
}

export default FiveDaysContainer;
