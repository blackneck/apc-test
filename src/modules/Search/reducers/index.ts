import {Action, handleActions} from 'redux-actions';

import {
  getIssueCommentsFail,
  getIssueCommentsRequest,
  getIssueCommentsSuccess,
  getIssuesFail,
  getIssuesRequest,
  getIssuesSuccess,
  // setOrganisation,
  // setRepository,
} from '../actions';
import {Issue, SeacrhState} from '../types';

export const initialState = {
  currentIssuesPage: 1,
  // organisation: '',
  // repository: '',
  isIssuesLoading: false,
  issuesList: [],
  error: null,
  // isIssueCommentsLoading: false,
  issueCommentsList: [],
};

export default handleActions<
  SeacrhState,
  {data: Array<Issue>; page?: number} | Error
>(
  {
    // [setOrganisation]: (state, {payload}) => ({
    //   ...state,
    //   organisation: payload,
    // }),
    // [setRepository]: (state, {payload}) => ({
    //   ...state,
    //   repository: payload,
    // }),
    [getIssuesRequest]: (state) => ({
      ...state,
      isIssuesLoading: true,
    }),
    [getIssuesSuccess]: (
      state,
      {payload}: Action<{data: Array<Issue>; page?: number}>,
    ) => ({
      ...state,
      isIssuesLoading: false,
      issuesList: payload.page
        ? [...state.issuesList, ...payload.data]
        : payload.data,
      currentIssuesPage: payload.page ? payload.page : 1,
    }),
    [getIssuesFail]: (_, {payload}: Action<Error>) => ({
      ...initialState,
      error: payload,
    }),
    [getIssueCommentsRequest]: (state) => ({
      ...state,
      isIssueCommentsLoading: true,
    }),
    [getIssueCommentsSuccess]: (state, {payload}) => ({
      ...state,
      issueCommentsList: payload,
      isIssueCommentsLoading: false,
    }),
    [getIssueCommentsFail]: (state, {payload}) => ({
      ...state,
      error: payload,
      isIssueCommentsLoading: false,
      issueCommentsList: initialState.issueCommentsList,
    }),
  },
  initialState,
);
