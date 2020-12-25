import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {Keyboard} from 'react-native';

import {getIssuesRequest} from '../actions';
import {getIssuesList, getIsLoading, getCurrentIssuesPage} from '../selectors';
import SearchScreen from '../components/SearchScreen';
import {Issue} from '../types';
import {
  SORT_ISSUES_BUTTON_ID,
  SORT_MODAL_ID,
  ISSUE_RIGHT_BUTTON_ID,
} from 'src/navigation/componentIds';
import {showSortModal} from '../helpers';
import {Filter, Sort} from 'src/api/types';

export default ({componentId}: {componentId: string}) => {
  const dispatch = useDispatch();

  const [organisation, setOrganisation] = useState<string>('facebook');
  const [repository, setRepository] = useState<string>('react-native');
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('created');

  const issuesList = useSelector(getIssuesList);
  const isIssuesLoading = useSelector(getIsLoading);
  const currentPage = useSelector(getCurrentIssuesPage);

  const performSearch = useCallback(
    (parameters: {
      organisation: string;
      repository: string;
      sort: Sort;
      state: Filter;
      page?: number;
    }) => {
      dispatch(getIssuesRequest({...parameters}));
    },
    [dispatch],
  );

  const handleSeacrh = useCallback((): void => {
    Keyboard.dismiss();
    performSearch({organisation, repository, sort: sort, state: filter});
  }, [organisation, repository, filter, sort, performSearch]);

  const handleOrganisationChange = useCallback((text: string): void => {
    setOrganisation(text.trim());
  }, []);

  const handleRepositoryChange = useCallback((text: string): void => {
    setRepository(text.trim());
  }, []);

  const handleFilterChange = useCallback(
    (filterValue: Filter): void => {
      setFilter(filterValue);
      performSearch({organisation, repository, sort: sort, state: filterValue});
    },
    [performSearch, organisation, repository, sort],
  );

  const handleSortChange = useCallback(
    (sortValue: 'created' | 'updated' | 'comments'): void => {
      Navigation.updateProps(SORT_MODAL_ID, {
        currentSort: sortValue,
      });
      setSort(sortValue);
      performSearch({organisation, repository, state: filter, sort: sortValue});
    },
    [performSearch, organisation, repository, filter],
  );

  const handleIssuePress = useCallback(
    (issue: Issue) => {
      Navigation.push(componentId, {
        component: {
          name: 'IssueDetails',
          passProps: {
            issue,
            organisation,
            repository,
            RightButtonId: ISSUE_RIGHT_BUTTON_ID,
          },
        },
      });
    },
    [componentId, organisation, repository],
  );

  const handleEndReached = useCallback(() => {
    performSearch({
      organisation,
      repository,
      sort,
      state: filter,
      page: currentPage + 1,
    });
  }, [performSearch, organisation, repository, filter, sort, currentPage]);

  const handleRefresh = useCallback(() => {
    performSearch({organisation, repository, sort, state: filter});
  }, [performSearch, organisation, repository, filter, sort]);

  useEffect(() => {
    const listener = Navigation.events().registerNavigationButtonPressedListener(
      ({buttonId}) => {
        if (buttonId === SORT_ISSUES_BUTTON_ID) {
          showSortModal({currentSort: sort, onSubmit: handleSortChange});
        }
      },
    );

    return () => listener.remove();
  }, [sort, handleSortChange]);

  const isSearchEnabled = useMemo(() => Boolean(organisation && repository), [
    organisation,
    repository,
  ]);

  return (
    <SearchScreen
      handleSearch={handleSeacrh}
      handleOrganisationChange={handleOrganisationChange}
      handleRepositoryChange={handleRepositoryChange}
      issuesList={issuesList}
      handleFilterChange={handleFilterChange}
      filter={filter}
      handleIssuePress={handleIssuePress}
      isIssuesLoading={isIssuesLoading}
      handleEndReached={handleEndReached}
      handleRefresh={handleRefresh}
      isSearchEnabled={isSearchEnabled}
    />
  );
};
