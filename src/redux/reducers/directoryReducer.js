import {
  FETCH_DIRECTORY_FAIL,
  FETCH_DIRECTORY_REQUEST,
  FETCH_DIRECTORY_SUCCESS,
} from '../types';

const initialState = {
  loading: false,
  error: null,
  directory: [],
};

export const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIRECTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DIRECTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        directory: action.payload,
      };

    case FETCH_DIRECTORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
