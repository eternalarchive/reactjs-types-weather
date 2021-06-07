import dayjs from 'dayjs';
import { List, TOnlyFiveData } from '../redux/modules/types';

function useWeekDatas(fiveDaysDatas: List[]) {
  const onlyFiveDatas: TOnlyFiveData[] =
    fiveDaysDatas &&
    fiveDaysDatas.filter(
      (fiveDaysData: { dt_txt: string }) =>
        fiveDaysData.dt_txt.slice(-8) === '00:00:00',
    );

  onlyFiveDatas.map((onlyFiveData: TOnlyFiveData) => {
    const day = dayjs(onlyFiveData.dt_txt).format('ddd');
    onlyFiveData.day = day.toUpperCase();
    return onlyFiveData;
  });

  return onlyFiveDatas;
}

export default useWeekDatas;
