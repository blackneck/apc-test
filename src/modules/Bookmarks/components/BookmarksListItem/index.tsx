import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import {Bookmark} from '../../types';
import {issueIconNameScheme} from 'src/modules/Search/constants';
import styles from './styles';
// import {appColors} from 'src/common/colors';

export default ({
  bookmark,
  handlePress,
}: // isEditing,
// isSelected,
{
  bookmark: Bookmark;
  handlePress: () => void;
  isEditing: boolean;
  // isSelected: boolean;
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={handlePress}
    style={styles.selectionWrapper}>
    {/* {isEditing && (
      <View style={styles.selectionCircle}>
        {isSelected && <Icon name="check" color={appColors.blue} size={15} />}
      </View>
    )} */}
    <View style={styles.container}>
      <Icon
        name={issueIconNameScheme[bookmark.state]}
        style={[styles[bookmark.state], styles.icon]}
        size={22}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>
          {bookmark.organisation} / {bookmark.repository}
        </Text>
        <Text style={styles.titleText}>{bookmark.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
