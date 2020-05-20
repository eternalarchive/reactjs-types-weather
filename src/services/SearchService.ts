import axios from 'axios';

export default class SearchService {
  static getWeatherDatas = async (cityName: string) => {
    return await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
  };
}