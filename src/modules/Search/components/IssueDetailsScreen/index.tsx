import React from 'react';
import {Image, FlatList, Text, View} from 'react-native';
import Markdown from 'react-native-markdown-renderer';

import {Comment, Issue} from '../../types';
import styles from './styles';

export default ({
  issue,
  issueCommentsList,
}: {
  issue: Issue;
  issueCommentsList: Array<Comment>;
}) => {
  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.descriptionContainer}>
          <Markdown>{issue.body}</Markdown>
        </View>
      }
      keyExtractor={(item) => item.id.toString()}
      data={issueCommentsList}
      style={styles.listContainer}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item}) => (
        <View style={styles.commentContainer}>
          <View style={styles.commentUserContainer}>
            <Image style={styles.avatar} source={{uri: item.user.avatar_url}} />
            <Text>{item.user.login}</Text>
          </View>
          <Markdown>{item.body}</Markdown>
        </View>
      )}
    />
  );
};
