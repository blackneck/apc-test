import moment from 'moment';
import {Action} from 'redux-actions';

import {testIsueHtmlUrl} from 'src/modules/Bookmarks/mocks';
import {getIssuesFail, getIssuesSuccess} from '../actions';
import {Issue} from '../types';

export const testIssue0: Issue = {
  body: 'test-issue-body',
  title: 'test-issue',
  state: 'closed',
  html_url: 'https://github.com/test-org/test-repo/0',
  created_at: moment().toString(),
  id: 0,
  labels: [{color: '#ff0000', id: 1, name: 'bug'}],
  number: 0,
  updated_at: moment().toString(),
};

export const testIssue1: Issue = {
  body: 'test-issue-body',
  title: 'test-issue',
  state: 'closed',
  html_url: 'https://github.com/test-org/test-repo/1',
  created_at: moment().toString(),
  id: 1,
  labels: [],
  number: 1,
  updated_at: moment().toString(),
};

export const testIssuesPayload: {
  data: Array<Issue>;
  page?: number;
} = {
  data: [
    {
      body: 'test-issue-body',
      title: 'test-issue',
      state: 'closed',
      html_url: testIsueHtmlUrl,
      created_at: moment().toString(),
      id: 0,
      labels: [{color: '#ff0000', id: 1, name: 'bug'}],
      number: 0,
      updated_at: moment().toString(),
    },
  ],
};

export const testIssuesPayloadWithPage: {
  data: Array<Issue>;
  page?: number;
} = {
  page: 2,
  data: [
    {
      body: 'test-issue-body',
      title: 'test-issue',
      state: 'closed',
      html_url: testIsueHtmlUrl,
      created_at: moment().toString(),
      id: 0,
      labels: [{color: '#ff0000', id: 1, name: 'bug'}],
      number: 0,
      updated_at: moment().toString(),
    },
  ],
};

export const testGetIssuesSuccessAction: Action<{
  data: Array<Issue>;
  page?: number;
}> = {
  type: getIssuesSuccess.toString(),
  payload: testIssuesPayload,
};

export const testGetIssuesWithPageSuccessAction: Action<{
  data: Array<Issue>;
  page?: number;
}> = {
  type: getIssuesSuccess.toString(),
  payload: testIssuesPayloadWithPage,
};

export const testGetIssuesFailAction: Action<Error> = {
  type: getIssuesFail.toString(),
  error: true,
  payload: new Error(),
};
