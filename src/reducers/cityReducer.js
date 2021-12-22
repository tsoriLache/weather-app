import { CHANGE_CITY } from '../actions/weatherActions';
const initialState = '{city}';

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return action.payload.city;
    default:
      return state;
  }
};

export default cityReducer;
