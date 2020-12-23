import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {sortOptionsScheme} from '../../constants';
import styles from './styles';
import {appColors} from '../../../../common/colors';

export default ({
  currentSort,
  handleSortChange,
}: {
  currentSort: 'created' | 'updated' | 'comments';
  handleSortChange: (
    newValue: 'created' | 'updated' | 'comments',
  ) => () => void;
}) => (
  <View style={styles.container}>
    <FlatList
      data={sortOptionsScheme}
      contentContainerStyle={styles.listWrapperContainer}
      keyExtractor={(item) => item.label}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={handleSortChange(item.value)}>
          <Text>{item.label}</Text>
          {item.value === currentSort && (
            <Icon name="check" color={appColors.blue} size={18} />
          )}
        </TouchableOpacity>
      )}
    />
  </View>
);
