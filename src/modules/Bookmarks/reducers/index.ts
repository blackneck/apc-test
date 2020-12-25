import {handleActions, Action} from 'redux-actions';

import {addBookmark, removeBookmark} from '../actions';
import {Bookmark, BookmarksState, CombinedPayloads} from '../types';

const initialState: BookmarksState = {
  bookmarksScheme: {},
};

export default handleActions<BookmarksState, CombinedPayloads>(
  {
    [addBookmark]: (state, {payload}: Action<Bookmark>) => ({
      ...state,
      bookmarksScheme: {
        [payload.number]: payload,
        ...state.bookmarksScheme,
      },
    }),
    [removeBookmark]: (state, {payload}: Action<number>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {[payload]: skip, ...updatedIssues} = state.bookmarksScheme;

      return {
        ...state,
        bookmarksScheme: updatedIssues,
      };
    },
  },
  initialState,
);
