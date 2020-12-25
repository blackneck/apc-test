import React, {useCallback} from 'react';
import {Navigation} from 'react-native-navigation';
import {useSelector} from 'react-redux';
// import {LayoutAnimation} from 'react-native';

import BookmarsScreen from '../components/BookmarksScreen';
import {getBookmarksList} from '../selectors';
import {Bookmark} from '../types';
import {BOOKMARK_RIGHT_BUTTON_ID} from 'src/navigation/componentIds';

export default ({componentId}: {componentId: string}) => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [selectedBookmarks, setSelectedBookmarks] = useState<{
  //   [index: number]: boolean;
  // }>({});

  const bookmarks = useSelector(getBookmarksList);

  const handleBookmarkPress = useCallback(
    (bookmark: Bookmark) => {
      // if (isEditing) {
      // setSelectedBookmarks((currentSelection) => {
      //   const {
      //     [bookmark.html_url]: isCurrentBookmarkSelected,
      //     ...otherSelectedBookmarks
      //   } = currentSelection;
      //   return isCurrentBookmarkSelected
      //     ? otherSelectedBookmarks
      //     : {...currentSelection, [bookmark.html_url]: true};
      // });
      // } else {
      Navigation.push(componentId, {
        component: {
          // id: BOOKMARK_DETAILS_SCREEN,
          name: 'IssueDetails',
          passProps: {
            issue: bookmark,
            organisation: bookmark.organisation,
            repository: bookmark.repository,
            rightButtonId: BOOKMARK_RIGHT_BUTTON_ID,
          },
        },
      });
      // }
    },
    [
      componentId,
      // isEditing
    ],
  );

  // useEffect(() => {
  //   const listener = Navigation.events().registerNavigationButtonPressedListener(
  //     () => {
  //       LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //       setIsEditing((currentValue) => !currentValue);
  //     },
  //   );

  //   return () => listener.remove();
  // }, []);

  // useEffect(() => {
  //   Navigation.mergeOptions(componentId, {
  //     topBar: {
  //       leftButtons: [
  //         {
  //           id: 'SELECT_ALL_BOOKMARKS_BUTTON_ID',
  //           text: isEditing ? 'Select All' : '',
  //         },
  //       ],
  //       rightButtons: [
  //         {
  //           id: 'EDIT_BOOKMARKS_BUTTON_ID',
  //           text: isEditing ? 'Cancel' : 'Edit',
  //         },
  //       ],
  //     },
  //   });
  // }, [componentId, isEditing]);

  // const isDeleteVisible = useMemo(() => {
  //   return bookmarks.some((bookmark) => selectedBookmarks[bookmark.html_url]);
  // }, [selectedBookmarks, bookmarks]);

  return (
    <BookmarsScreen
      // isEditing={isEditing}
      bookmarks={bookmarks}
      handleBookmarkPress={handleBookmarkPress}
      // selectedBookmarks={selectedBookmarks}
      // isDeleteVisible={isDeleteVisible}
    />
  );
};
