import {SET_AUTH_STATE} from '../types';

const initialState = {
  isAdmin: true,
  user: null,
  allowSwipeUp: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
