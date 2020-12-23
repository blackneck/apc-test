import {handleActions, Action} from 'redux-actions';

import {addBookmark, removeBookmark} from '../actions';
import {Bookmark, BookmarksState, CombinedPayloads} from '../types';

const initialState: BookmarksState = {};

export default handleActions<BookmarksState, CombinedPayloads>(
  {
    [addBookmark]: (state, {payload}: Action<Bookmark>): BookmarksState => ({
      ...state,
      [payload.id]: payload,
    }),
    [removeBookmark]: (state, {payload}: Action<string>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {[payload]: skip, ...updatedIssues} = state;

      return updatedIssues;
    },
  },
  initialState,
);
