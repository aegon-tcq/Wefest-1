import {
  FETCH_ANNOUNCEMENTS_FAIL,
  FETCH_ANNOUNCEMENTS_REQUEST,
  FETCH_ANNOUNCEMENTS_SUCCESS,
} from '../types';

export const announcmentRequest = () => ({
  type: FETCH_ANNOUNCEMENTS_REQUEST,
});
export const announcmentRequestFail = (payload = {}) => ({
  type: FETCH_ANNOUNCEMENTS_FAIL,
  payload: payload,
});
export const announcmentRequestSuccess = payload  => ({
  type: FETCH_ANNOUNCEMENTS_SUCCESS,
  payload: payload,
});
