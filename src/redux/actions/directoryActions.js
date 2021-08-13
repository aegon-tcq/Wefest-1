import {
    FETCH_DIRECTORY_FAIL,
    FETCH_DIRECTORY_REQUEST,
    FETCH_DIRECTORY_SUCCESS,
  } from '../types';


  export const directoryRequest = () => ({
    type: FETCH_DIRECTORY_REQUEST
  });
  export const directoryRequestFail = (payload = {}) => ({
    type:  FETCH_DIRECTORY_FAIL,
    payload: payload,
  });
  export const directoryRequestSuccess = (payload = {}) => ({
    type: FETCH_DIRECTORY_SUCCESS,
    payload: payload,
  });