import {
  FETCH_GALLERY_FAIL,
  FETCH_GALLERY_REQUEST,
  FETCH_GALLERY_SUCCESS,
} from '../types';

const initialState = {
  loading: false,
  error: null,
  gallery: [],
};

export const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        gallery: action.payload,
      };

    case FETCH_GALLERY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
