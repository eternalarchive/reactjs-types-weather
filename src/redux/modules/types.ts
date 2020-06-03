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