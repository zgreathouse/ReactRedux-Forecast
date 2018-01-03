import { FETCH_FORECAST } from '../actions';

const forecastReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_FORECAST:
      return [action.payload.data, ...state]
    default:
      return state;
  };
};

export default forecastReducer;
