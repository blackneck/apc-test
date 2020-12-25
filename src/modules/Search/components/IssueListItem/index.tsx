import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import {Issue} from '../../types';
import {issueIconNameScheme} from '../../constants';
import styles from './styles';
import invert from 'invert-color';

export default ({
  issue,
  handlePress,
}: {
  issue: Issue;
  handlePress: () => void;
}) => (
  <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
    <View style={styles.container}>
      <Icon
        name={issueIconNameScheme[issue.state]}
        style={[styles[issue.state], styles.icon]}
        size={22}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{issue.title}</Text>
        <View style={styles.labelsContainer}>
          {issue.labels.map((label) => (
            <View
              key={label.id.toString()}
              style={[
                styles.labelContainer,
                {backgroundColor: `#${label.color}`},
              ]}>
              <Text style={{color: invert(label.color, true)}}>
                {label.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
