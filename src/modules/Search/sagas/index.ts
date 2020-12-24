import {all, call, put, takeLatest, takeLeading} from 'redux-saga/effects';

import {makeRequest} from 'src/api/axios';
import {
  getIssueCommentsRequestConfig,
  getIssuesRequestConfig,
} from 'src/api/issues';
import {
  RequestIssueCommentsParameters,
  RequestIssuesParameters,
} from 'src/api/types';

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

    yield put(
      actions.getIssuesSuccess({data: response.data, page: payload.page}),
    );
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

    yield put(actions.getIssueCommentsSuccess(response.data));
  } catch (error) {
    yield put(actions.getIssueCommentsFail(error));
  }
}

export default function* seacrhSaga() {
  yield all([
    takeLeading(actions.getIssuesRequest, handleGetIssuesRequest),
    takeLatest(actions.getIssueCommentsRequest, handleGetIssueCommentsRequest),
  ]);
}
