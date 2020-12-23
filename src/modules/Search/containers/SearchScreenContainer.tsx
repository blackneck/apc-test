import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import {getIssuesRequest} from '../actions';
import {getIssuesList, getIsLoading} from '../selectors';
import SearchScreen from '../components/SearchScreen';
import {Issue} from '../types';

export default ({componentId}: {componentId: string}) => {
  const dispatch = useDispatch();

  const [organisation, setOrganisation] = useState<string>('');
  const [repository, setRepository] = useState<string>('');
  const [filter, setFilter] = useState<'open' | 'closed' | 'all'>('all');
  const [sort, setSort] = useState<'created' | 'updated' | 'comments'>(
    'created',
  );

  const issuesList = useSelector(getIssuesList);
  const isIssuesLoading = useSelector(getIsLoading);

  const performSearch = useCallback(
    (parameters: {
      organisation: string;
      repository: string;
      sort: 'created' | 'updated' | 'comments';
      state: 'open' | 'closed' | 'all';
    }) => {
      dispatch(getIssuesRequest({...parameters}));
    },
    [dispatch],
  );

  const handleSeacrh = useCallback((): void => {
    performSearch({organisation, repository, sort: sort, state: filter});
  }, [organisation, repository, filter, sort, performSearch]);

  const handleOrganisationChange = useCallback((text: string): void => {
    setOrganisation(text);
  }, []);

  const handleRepositoryChange = useCallback((text: string): void => {
    setRepository(text);
  }, []);

  const handleFilterChange = useCallback(
    (filterValue: 'open' | 'closed' | 'all'): void => {
      setFilter(filterValue);
      performSearch({organisation, repository, sort: sort, state: filterValue});
    },
    [performSearch, organisation, repository, sort],
  );

  const handleSortChange = useCallback(
    (sortValue: 'created' | 'updated' | 'comments'): void => {
      Navigation.updateProps('SORT_MODAL_ID', {
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
          },
        },
      });
    },
    [componentId, organisation, repository],
  );

  useEffect(() => {
    const listener = Navigation.events().registerNavigationButtonPressedListener(
      () => {
        Navigation.showModal({
          stack: {
            children: [
              {
                component: {
                  id: 'SORT_MODAL_ID',
                  name: 'SortModal',
                  passProps: {
                    currentSort: sort,
                    onSubmit: handleSortChange,
                  },
                  options: {
                    topBar: {
                      title: {
                        text: 'Sort issues',
                      },
                    },
                  },
                },
              },
            ],
          },
        });
      },
    );

    return () => listener.remove();
  }, [sort, handleSortChange]);

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
    />
  );
};
