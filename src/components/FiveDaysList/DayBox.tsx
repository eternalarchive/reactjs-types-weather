import React from 'react';
import * as S from './FiveDaysStyle';
import { Tforecast } from '../../redux/modules/types';
import useWeekDatas from '../../hooks/useWeekDatas';
import { getIcon } from '../common/Icons';

type DayBoxProps = {
  mode: boolean;
  selectedDatas: Tforecast[];
};

function DayBox({ mode, selectedDatas }: DayBoxProps) {
  const fiveDaysDatas = selectedDatas.map(selectedData => selectedData.list);
  const weekAndFiveDatas = useWeekDatas(fiveDaysDatas);
  console.log(weekAndFiveDatas);

  return (
    <>
      {weekAndFiveDatas && weekAndFiveDatas.map((weekAndFiveData: any) =>
        <S.WeatherLi mode={mode} key={weekAndFiveData.dt}>
          <S.DayText>{weekAndFiveData.day}</S.DayText>
          <S.WeatherIcon className={`${getIcon(weekAndFiveData.weather[0].main)} fa-3x`} />
          <S.WeatherMain>{weekAndFiveData.weather[0].main}</S.WeatherMain>
          <S.TempTextWrap>
            <S.TempText>H {Math.round(weekAndFiveData.main.temp_max)}°</S.TempText>
            <S.TempText>L {Math.round(weekAndFiveData.main.temp_min)}°</S.TempText>
          </S.TempTextWrap>
          <S.HuWrap>
            <S.HuIcon className="fas fa-tint fa-xs"></S.HuIcon>
            <S.HuText>{weekAndFiveData.main.humidity}%</S.HuText>
          </S.HuWrap>
        </S.WeatherLi>
      )}
    </>
  );
};

export default DayBox;
