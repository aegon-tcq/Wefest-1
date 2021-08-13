import {SET_REACH_US_DATA} from '../types';

const initialState = {
  reachUsForm: {},
};

export const reachUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REACH_US_DATA:
      return {
        ...state,
        reachUsForm: action.payload,
      };
    default:
      return state;
  }
};
