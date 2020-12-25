import React, {useCallback} from 'react';

import BookmarksListItem from '../components/BookmarksListItem';
import {Bookmark} from '../types';

export default ({
  onPress,
  bookmark,
}: // isEditing,
// isSelected,
{
  bookmark: Bookmark;
  onPress: (bookmark: Bookmark) => void;
  // isEditing: boolean;
  // isSelected: boolean;
}) => {
  const handlePress = useCallback(() => {
    onPress(bookmark);
  }, [onPress, bookmark]);

  return (
    <BookmarksListItem
      // isEditing={isEditing}
      handlePress={handlePress}
      bookmark={bookmark}
      // isSelected={isSelected}
    />
  );
};
