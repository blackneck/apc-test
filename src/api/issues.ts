import {AxiosRequestConfig} from 'axios';
import queryString from 'query-string';

import {RequestIssueCommentsParameters, RequestIssuesParameters} from './types';

export const getIssuesRequestConfig = ({
  state,
  sort,
  organisation,
  repository,
  page,
}: RequestIssuesParameters): AxiosRequestConfig => {
  const query = queryString.stringify({state, sort, page});

  return {
    url: `/repos/${organisation}/${repository}/issues?${query}`,
    method: 'GET',
  };
};

export const getIssueCommentsRequestConfig = ({
  organisation,
  repository,
  issueNumber,
}: RequestIssueCommentsParameters): AxiosRequestConfig => {
  return {
    url: `/repos/${organisation}/${repository}/issues/${issueNumber}/comments`,
    method: 'GET',
  };
};
