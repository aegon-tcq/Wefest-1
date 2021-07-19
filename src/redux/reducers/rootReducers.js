import {combineReducers} from 'redux';
import {announcementReducer} from './announcementReducer';
import {eventsReducer} from './eventReducer';
import {galleryReducer} from './galleryReducer';
import {directoryReducer} from './directoryReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['events'],
};

export default combineReducers({
  eventsState: persistReducer(persistConfig, eventsReducer),
  galleryState: galleryReducer,
  announcementState: announcementReducer,
  directoryState: directoryReducer,
});
