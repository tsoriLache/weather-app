import axios from 'axios';

export const CHANGE_CITY = 'change_city';
export const CHANGE_WEATHER = 'change_weather';

export const changeCity = (city) => {
  return (dispatch) => {
    return dispatch(getWeatherByCity(city)); // get me weather
  };
};

export const getWeatherByCity = (city) => {
  const apiid = '0e267dbc74c50d22f43c08c4eabfe30c';
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiid}`
      )
      .then((response) => {
        dispatch({
          type: CHANGE_CITY,
          payload: { city: response.data.name },
        });
        dispatch({
          type: CHANGE_WEATHER,
          payload: { weather: response.data.main },
        });
      })
      .catch((err) => console.log('not valid city', err));
  };
};
