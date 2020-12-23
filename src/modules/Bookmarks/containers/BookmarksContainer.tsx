import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import BookmarsScreen from '../components/BookmarksScreen';
import {getBookmarks} from '../selectors';
import {Bookmark} from '../types';

export default ({}) => {
  const bookmarks = useSelector(getBookmarks);

  const bookmarksArray = useMemo(
    (): Array<Bookmark> | null =>
      Object.values(bookmarks).length > 0 ? Object.values(bookmarks) : null,
    [bookmarks],
  );

  return <BookmarsScreen bookmarks={bookmarksArray} />;
};
