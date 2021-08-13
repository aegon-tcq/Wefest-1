import {
    FETCH_GALLERY_FAIL,
    FETCH_GALLERY_REQUEST,
    FETCH_GALLERY_SUCCESS,
  } from '../types';


  export const galleryRequest = () => ({
    type: FETCH_GALLERY_REQUEST
  });
  export const galleryRequestFail = (payload = {}) => ({
    type: FETCH_GALLERY_FAIL,
    payload: payload,
  });
  export const galleryRequestSuccess = (payload = {}) => ({
    type: FETCH_GALLERY_SUCCESS,
    payload: payload,
  });