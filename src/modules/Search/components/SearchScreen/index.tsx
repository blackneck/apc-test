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
  handleFilterChange,
  handleIssuePress,
  handleEndReached,
  handleRefresh,
  issuesList,
  isIssuesLoading,
  isSearchEnabled,
}: SeacrhScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="Organisation"
          style={styles.textInput}
          autoCapitalize={'none'}
          onChangeText={handleOrganisationChange}
          returnKeyType="done"
        />
        <TextInput
          placeholder="Repository"
          style={styles.textInput}
          autoCapitalize={'none'}
          onChangeText={handleRepositoryChange}
          returnKeyType="done"
        />
        <SegmentedControl
          style={styles.secmentedControl}
          values={filterSegmentedControlOptions}
          onValueChange={handleFilterChange}
          selectedIndex={1}
        />
        <Button
          onPress={handleSearch}
          title="Search"
          disabled={!isSearchEnabled}
        />
      </View>
      <FlatList
        keyboardShouldPersistTaps="never"
        refreshing={isIssuesLoading}
        data={issuesList}
        style={styles.listWrapperContainer}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        removeClippedSubviews={true}
        maxToRenderPerBatch={20}
        ListFooterComponent={
          issuesList.length > 0 ? (
            <ActivityIndicator style={styles.loadMoreSpinner} />
          ) : null
        }
        onRefresh={handleRefresh}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <IssueListItem onPress={handleIssuePress} issue={item} />
        )}
      />
    </View>
  );
};
