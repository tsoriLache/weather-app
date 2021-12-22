import { ADD_CARD } from '../actions/weatherActions';
const initialState = [];

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      return [...state, { ...payload }];
    default:
      return state;
  }
};

export default listReducer;
