import {all, call, put, takeLatest} from 'redux-saga/effects';

import {makeRequest} from '../../../api/axios';
import {
  getIssueCommentsRequestConfig,
  getIssuesRequestConfig,
} from '../../../api/issues';
import {
  RequestIssueCommentsParameters,
  RequestIssuesParameters,
} from '../../../api/types';

import * as actions from '../actions';

function* handleGetIssuesRequest({
  payload,
}: {
  payload: RequestIssuesParameters;
}) {
  try {
    const response = yield call(
      makeRequest,
      getIssuesRequestConfig({...payload}),
    );

    yield put(actions.getIssuesSuccess(response.data));
  } catch (error) {
    yield put(actions.getIssuesFail(error));
  }
}

function* handleGetIssueCommentsRequest({
  payload,
}: {
  payload: RequestIssueCommentsParameters;
}) {
  try {
    const response = yield call(
      makeRequest,
      getIssueCommentsRequestConfig({...payload}),
    );
    console.log(response.data.length, 'huj');
    yield put(actions.getIssueCommentsSuccess(response.data));
  } catch (error) {
    yield put(actions.getIssueCommentsFail(error));
  }
}

export default function* seacrhSaga() {
  yield all([
    takeLatest(actions.getIssuesRequest, handleGetIssuesRequest),
    takeLatest(actions.getIssueCommentsRequest, handleGetIssueCommentsRequest),
  ]);
}
