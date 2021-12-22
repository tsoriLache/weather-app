const initialState = { main: { temp: '{temp}' } };

const weatherReducer = (weather = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_WEATHER':
      return payload.city;
    default:
      return weather;
  }
};

export default weatherReducer;
