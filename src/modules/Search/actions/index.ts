import {createAction} from 'redux-actions';
import {Issue} from '../types';

export const setOrganisation = createAction('SET_ORGANISATION');
export const setRepository = createAction('SET_REPOSITORY');
export const setFilter = createAction('SET_FILTERING');
export const setSorting = createAction('SET_SORTING');

export const getIssuesRequest = createAction('GET_ISSUES_REQUEST');
export const getIssuesSuccess = createAction<{
  data: Array<Issue>;
  page?: number;
}>('GET_ISSUES_SUCCESS');
export const getIssuesFail = createAction('GET_ISSUES_FAIL');

export const getIssueCommentsRequest = createAction(
  'GET_ISSUE_COMMENTS_REQUEST',
);
export const getIssueCommentsSuccess = createAction(
  'GET_ISSUE_COMMENTS_SUCCESS',
);
export const getIssueCommentsFail = createAction('GET_ISSUE_COMMENTS_FAIL');
