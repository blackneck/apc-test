import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getIssueCommentsList} from '../selectors';
import {getIssueCommentsRequest} from '../actions';
import IssueDetailsScreen from '../components/IssueDetailsScreen';
import {Issue} from '../types';

export default ({
  issue,
  organisation,
  repository,
}: {
  issue: Issue;
  repository: string;
  organisation: string;
}) => {
  const dispatch = useDispatch();

  const issueCommentsList = useSelector(getIssueCommentsList);

  useEffect(() => {
    dispatch(
      getIssueCommentsRequest({
        organisation,
        repository,
        issueNumber: issue.number,
      }),
    );
  }, [dispatch, issue.number, organisation, repository]);

  return (
    <IssueDetailsScreen issue={issue} issueCommentsList={issueCommentsList} />
  );
};
