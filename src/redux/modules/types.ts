// weather
export type TWeather = {
  coord:      TCoord;
  weather:    TWeatherElement[];
  base:       string;
  main:       TMain;
  visibility: number;
  wind:       TWind;
  clouds:     TClouds;
  dt:         number;
  sys:        TSys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export type TClouds = {
  all: number;
}

export type TCoord = {
  lon: number;
  lat: number;
}

export type TMain = {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export type TSys = {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

export type TWeatherElement = {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export type TWind = {
  speed: number;
  deg:   number;
}

// forecast
export type Tforecast = {
  cod:     string;
  message: number;
  cnt:     number;
  list:    List[];
  city:    City;
}

export type City = {
  id:         number;
  name:       string;
  coord:      Coord;
  country:    string;
  population: number;
  timezone:   number;
  sunrise:    number;
  sunset:     number;
}

export type Coord = {
  lat: number;
  lon: number;
}

export type List = {
  dt:      number;
  main:    MainClass;
  weather: Weather[];
  clouds:  Clouds;
  wind:    Wind;
  sys:     Sys;
  dt_txt:  Date;
  rain?:   Rain;
}

export type Clouds = {
  all: number;
}

export type MainClass = {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  sea_level:  number;
  grnd_level: number;
  humidity:   number;
  temp_kf:    number;
}

export type Rain = {
  "3h": number;
}

export type Sys = {
  pod: Pod;
}

export enum Pod {
  D = "d",
  N = "n",
}

export type Weather = {
  id:          number;
  main:        MainEnum;
  description: Description;
  icon:        string;
}

export enum Description {
  BrokenClouds = "broken clouds",
  ClearSky = "clear sky",
  FewClouds = "few clouds",
  LightRain = "light rain",
  OvercastClouds = "overcast clouds",
  ScatteredClouds = "scattered clouds",
}

export enum MainEnum {
  Clear = "Clear",
  Clouds = "Clouds",
  Rain = "Rain",
}

export type Wind = {
  speed: number;
  deg:   number;
}

// mode
export type Tmode = {
  mode: boolean;
};