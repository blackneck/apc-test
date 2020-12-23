import {SeacrhState} from '../types';

export const getIssuesList = (state: {search: SeacrhState}) =>
  state.search.issuesList;

export const getIsLoading = (state: {search: SeacrhState}) =>
  state.search.isIssuesLoading;

export const getIssueCommentsList = (state: {search: SeacrhState}) =>
  state.search.issueCommentsList;
