import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import weatherReducer from './weatherReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({
  city: cityReducer,
  weather: weatherReducer,
  list: listReducer,
});

export default rootReducer;
