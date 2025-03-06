import { combineReducers } from 'redux';

const hotelsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_HOTELS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  hotels: hotelsReducer,
});