import { List } from '../redux/modules/types';

type useWeekDatasProps = {
  fiveDaysDatas: List[];
};

function useWeekDatas(fiveDaysDatas: any) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const onlyFiveDatas =
    fiveDaysDatas[0] &&
    fiveDaysDatas[0].filter(
      (fiveDaysData: { dt_txt: string }) =>
        fiveDaysData.dt_txt.slice(-8) === '00:00:00',
    );

  onlyFiveDatas.map((onlyFiveData: any) => {
    let dayNumber = new Date(onlyFiveData.dt_txt).getDay();
    dayNumber = dayNumber === 6 ? 0 : dayNumber;
    onlyFiveData.day = week[dayNumber + 1];
    return onlyFiveData;
  });

  return onlyFiveDatas;
}

export default useWeekDatas;
