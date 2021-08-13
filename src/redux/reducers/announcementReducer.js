import {
  FETCH_ANNOUNCEMENTS_FAIL,
  FETCH_ANNOUNCEMENTS_REQUEST,
  FETCH_ANNOUNCEMENTS_SUCCESS,
} from '../types';

const initialState = {
  loading: false,
  error: null,
  announcements: [],
};

export const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANNOUNCEMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ANNOUNCEMENTS_SUCCESS:
      console.log("reducer",action.payload)
      return {
        ...state,
        loading: false,
        announcements: action.payload,
      };

    case FETCH_ANNOUNCEMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
