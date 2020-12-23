import React from 'react';
import {View, Text} from 'react-native';

export default ({description}: {description: string}) => (
  <View>
    <Text>{description}</Text>
  </View>
);
