import { List } from "../redux/modules/types";

type useWeekDatasProps = {
  fiveDaysDatas: List[];
}

function useWeekDatas(fiveDaysDatas: any) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const onlyFiveDatas = fiveDaysDatas[0] && fiveDaysDatas[0].filter((fiveDaysData: { dt_txt: string; }) => fiveDaysData.dt_txt.slice(-8) === '00:00:00');
  const weekNumbers: number[] = [];
  const today = new Date().getDay();

  for (let i = today; i < 7 ; i++) {
    if(weekNumbers.length === 5) break;
    if(i === 6) {i = 0;}
    weekNumbers.push(i + 1);
  }

  const weekDatas = weekNumbers.map(weekNumbers => week[weekNumbers]);
  console.log(onlyFiveDatas, weekDatas);

  return onlyFiveDatas;
};

export default useWeekDatas;
