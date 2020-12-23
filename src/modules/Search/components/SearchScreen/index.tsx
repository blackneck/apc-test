import React from 'react';
import SegmentedControl from '@react-native-community/segmented-control';
import {
  View,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {SeacrhScreenProps} from '../../types';
import IssueListItem from '../../containers/IssueListItemContainer';
import {filterSegmentedControlOptions} from '../../constants';
import styles from './styles';

export default ({
  handleSearch,
  handleRepositoryChange,
  handleOrganisationChange,
  issuesList,
  handleFilterChange,
  handleIssuePress,
  isIssuesLoading,
}: SeacrhScreenProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Organisation"
        style={styles.textInput}
        autoCapitalize={'none'}
        onChangeText={handleOrganisationChange}
      />
      <TextInput
        placeholder="Repository"
        style={styles.textInput}
        autoCapitalize={'none'}
        onChangeText={handleRepositoryChange}
      />
      <Button onPress={handleSearch} title="search" />
      <SegmentedControl
        style={styles.secmentedControl}
        values={filterSegmentedControlOptions}
        onValueChange={handleFilterChange}
        selectedIndex={1}
      />
      {isIssuesLoading ? (
        <ActivityIndicator style={styles.spinner} />
      ) : (
        <FlatList
          refreshing={false}
          onRefresh={() => {}}
          data={issuesList}
          keyExtractor={(item) => item.id.toString()}
          style={styles.listWrapperContainer}
          contentContainerStyle={styles.listContainer}
          renderItem={({item}) => (
            <IssueListItem onPress={handleIssuePress} issue={item} />
          )}
        />
      )}
    </View>
  );
};
