import { combineReducers } from 'redux';

//reducers
import forecastReducer from './forecastReducer';

const rootReducer = combineReducers({
  forecast: forecastReducer
});

export default rootReducer;
