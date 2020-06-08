export const icons = {
  sunny: 'fas fa-sun',
  sun_cloud: 'fas fa-cloud-sun',
  cloud: 'fas fa-cloud',
  rain: 'fas fa-cloud-rain',
  snow: 'fas fa-snowflake',
  thunder: 'fas fa-bolt',
  mist: 'fas fa-water',
};

export function getIcon(main: string): string | void {
  switch (main) {
    case 'Clear':
      return icons.sunny;
    case 'Clouds':
      return icons.cloud;
    case 'Rain':
      return icons.rain;
    case 'Snow':
      return icons.snow;
    case 'Mist':
      return icons.mist;
    default:
      return alert('해당하는 아이콘이 없습니다.');
  }
}
