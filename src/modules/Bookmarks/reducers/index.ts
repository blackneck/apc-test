import {handleActions, Action} from 'redux-actions';

import {addBookmark, removeBookmark} from '../actions';
import {Bookmark, BookmarksState, CombinedPayloads} from '../types';

export const initialState: BookmarksState = {
  bookmarksScheme: {},
};

export default handleActions<BookmarksState, CombinedPayloads>(
  {
    [addBookmark]: (state, {payload}: Action<Bookmark>) => ({
      ...state,
      bookmarksScheme: {
        [payload.html_url]: payload,
        ...state.bookmarksScheme,
      },
    }),
    [removeBookmark]: (state, {payload}: Action<string>) => {
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
