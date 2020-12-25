import {createSelector} from 'reselect';

import {BookmarksState} from '../types';

export const getBookmarksSheme = (state: {bookmarks: BookmarksState}) => {
  return state.bookmarks.bookmarksScheme;
};

export const getBookmarksList = createSelector(
  getBookmarksSheme,
  (bookmarksScheme) => {
    return Object.values(bookmarksScheme);
  },
);
