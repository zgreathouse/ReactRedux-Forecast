import { combineReducers } from 'redux';

//reducers
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
