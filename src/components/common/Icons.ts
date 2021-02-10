export const icons = {
  sunny: 'fas fa-sun',
  sun_cloud: 'fas fa-cloud-sun',
  cloud: 'fas fa-cloud',
  rain: 'fas fa-cloud-showers-heavy',
  snow: 'fas fa-snowflake',
  thunder: 'fas fa-bolt',
  mist: 'fas fa-water',
  drizzle: 'fas fa-cloud-rain',
  smoke: 'fas fa-smog',
  haze: 'fas fa-water',
  sand: 'fas fa-water',
  dust: 'fas fa-water',
  ash: 'fas fa-water',
  squall: 'fas fa-cloud-showers-heavy',
  tornado: 'fas fa-wind',
  default: 'fas fa-rainbow',
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
    case 'Thunderstorm':
      return icons.thunder;
    case 'Mist':
      return icons.mist;
    case 'Smoke':
      return icons.smoke;
    case 'Haze':
      return icons.haze;
    case 'Dust':
      return icons.dust;
    case 'Ash':
      return icons.ash;
    case 'Squall':
      return icons.squall;
    case 'Tornado':
      return icons.tornado;
    default:
      return icons.default;
  }
}
