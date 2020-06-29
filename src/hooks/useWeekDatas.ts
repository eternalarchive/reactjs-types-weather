import { List, OnlyFiveData } from '../redux/modules/types';

function useWeekDatas(fiveDaysDatas: List[]) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const onlyFiveDatas =
    fiveDaysDatas &&
    fiveDaysDatas.filter(
      (fiveDaysData: { dt_txt: string }) =>
        fiveDaysData.dt_txt.slice(-8) === '00:00:00',
    );

  onlyFiveDatas.map((onlyFiveData: OnlyFiveData) => {
    let dayNumber = new Date(onlyFiveData.dt_txt).getDay();
    dayNumber = dayNumber === 6 ? -1 : dayNumber;
    onlyFiveData.day = week[dayNumber + 1];
    return onlyFiveData;
  });

  return onlyFiveDatas;
}

export default useWeekDatas;
