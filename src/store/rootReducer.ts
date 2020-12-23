import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import searchReducer from '../modules/Search/reducers';
import bookmarksReducer from '../modules/Bookmarks/reducers';

export default combineReducers({
  search: searchReducer,
  bookmarks: persistReducer(
    {key: 'bookmarks', storage: AsyncStorage},
    bookmarksReducer,
  ),
});
