import Immutable from 'immutable';
import {
  LOCATION_CHANGE
} from 'react-router-redux';

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
});

export default (state = initialState, action) => {
  console.log("333333333")	
  console.log(action)
  if (action.type === LOCATION_CHANGE) {
  	console.log(action)
    return state.merge({
      locationBeforeTransitions: action.payload
    });
  }

  return state;
};