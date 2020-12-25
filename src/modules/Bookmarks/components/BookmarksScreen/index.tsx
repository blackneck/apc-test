import React from 'react';
import {FlatList, View} from 'react-native';

import {BookmarksScreenProps} from '../../types';
import BookmarksListItem from '../../containers/BookmarkListItemContainer';
import styles from './styles';
// import {appColors} from 'src/common/colors';

export default ({
  bookmarks,
  handleBookmarkPress,
}: // isEditing,
// selectedBookmarks,
// isDeleteVisible,
BookmarksScreenProps) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.number.toString()}
        data={bookmarks}
        style={styles.listWrapperContainer}
        renderItem={({item}) => (
          <BookmarksListItem
            // isEditing={isEditing}
            onPress={handleBookmarkPress}
            bookmark={item}
            // isSelected={selectedBookmarks[item.number]}
          />
        )}
      />
      {/* {isDeleteVisible && (
        <View style={{position: 'absolute', bottom: 0}}>
          <Button title="Delete" color={appColors.red} onPress={() => {}} />
        </View>
      )} */}
    </View>
  );
};
