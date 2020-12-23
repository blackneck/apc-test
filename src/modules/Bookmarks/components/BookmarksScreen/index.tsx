import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {BookmarksScreenProps} from '../../types';
import BookmarksListItem from '../BookmarksListItem';
import styles from './styles';

export default ({bookmarks}: BookmarksScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>bookmarks</Text>
      <FlatList
        keyExtractor={(item) => item.toString()}
        ListEmptyComponent={<Text>Empty</Text>}
        data={bookmarks}
        renderItem={({item}) => (
          <BookmarksListItem description={item.description} />
        )}
      />
    </View>
  );
};
