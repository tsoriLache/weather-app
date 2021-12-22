const initialState = '{city-name}';

const cityReducer = (city = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_CITY':
      return payload.city;
    // case 'REMOVE_CITY':
    //   return cities.filter((city) => city !== payload.city);
    default:
      return city;
  }
};

export default cityReducer;
