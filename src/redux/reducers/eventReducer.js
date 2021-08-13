import {
  FETCH_EVENTS_FAIL,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  SET_EVENT_STATE,
} from '../types';

const initialState = {
  loading: false,
  error: null,
  events: [],
  selectedEvent: null,
  isEdit: false,
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };

    case FETCH_EVENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
