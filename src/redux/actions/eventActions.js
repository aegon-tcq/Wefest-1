import {
  FETCH_EVENTS_FAIL,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  SET_EVENT_STATE,
} from '../types';

export const setEventState = payload => ({
  type: SET_EVENT_STATE,
  payload,
});

export const eventRequest = () => ({
  type: FETCH_EVENTS_REQUEST,
});
export const eventRequestFail = (payload = {}) => ({
  type: FETCH_EVENTS_FAIL,
  payload: payload,
});
export const eventRequestSuccess = (payload = {}) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: payload,
});
