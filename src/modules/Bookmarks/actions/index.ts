import {createAction} from 'redux-actions';
import {Bookmark} from '../types';

export const addBookmark = createAction<Bookmark>('ADD_ISSUE');
export const removeBookmark = createAction<string>('REMOVE_ISSUE');
