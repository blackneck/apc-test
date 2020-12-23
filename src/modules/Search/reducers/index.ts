import {handleActions} from 'redux-actions';
import {
  getIssueCommentsFail,
  getIssueCommentsRequest,
  getIssueCommentsSuccess,
  getIssuesFail,
  getIssuesRequest,
  getIssuesSuccess,
  setOrganisation,
  setRepository,
} from '../actions';

const initialState = {};

export default handleActions(
  {
    [setOrganisation]: (state, {payload}) => ({
      ...state,
      organisation: payload,
    }),
    [setRepository]: (state, {payload}) => ({
      ...state,
      repository: payload,
    }),
    [getIssuesRequest]: (state) => ({
      ...state,
      isIssuesLoading: true,
    }),
    [getIssuesSuccess]: (state, {payload}) => ({
      ...state,
      issuesList: payload,
      isIssuesLoading: false,
    }),
    [getIssuesFail]: (state, {payload}) => ({
      ...state,
      error: payload,
      isIssuesLoading: false,
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
    }),
  },
  initialState,
);
