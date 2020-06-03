import axios from 'axios';
import { TWeather } from '../redux/modules/types';

export default class SearchService {
  static getWeatherDatas = async (cityName: string) => {
    return await axios.get<TWeather[]>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
  };
}