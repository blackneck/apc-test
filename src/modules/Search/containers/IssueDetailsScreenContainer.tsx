import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import {getIssueCommentsList} from '../selectors';
import {getIssueCommentsRequest} from '../actions';
import IssueDetailsScreen from '../components/IssueDetailsScreen';
import {addBookmark, removeBookmark} from 'src/modules/Bookmarks/actions';
import {getBookmarksSheme} from 'src/modules/Bookmarks/selectors';
import {plus, trashcan} from 'src/common/icons';
import {IssueDetailsScreenProps} from '../types';

export default ({
  issue,
  organisation,
  repository,
  componentId,
  rightButtonId,
}: IssueDetailsScreenProps) => {
  const dispatch = useDispatch();

  const issueCommentsList = useSelector(getIssueCommentsList);
  const bookmarksScheme = useSelector(getBookmarksSheme);

  useEffect(() => {
    dispatch(
      getIssueCommentsRequest({
        organisation,
        repository,
        issueNumber: issue.number,
      }),
    );
  }, [dispatch, issue.number, organisation, repository]);

  useEffect(() => {
    const listener = Navigation.events().registerNavigationButtonPressedListener(
      ({buttonId}) => {
        if (buttonId === rightButtonId) {
          !bookmarksScheme[issue.number]
            ? dispatch(addBookmark({...issue, organisation, repository}))
            : dispatch(removeBookmark(issue.number));
        }
      },
    );

    return () => listener.remove();
  }, [
    repository,
    organisation,
    issue,
    dispatch,
    bookmarksScheme,
    issue.number,
    rightButtonId,
  ]);

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        rightButtons: [
          {
            id: rightButtonId,
            icon: !bookmarksScheme[issue.number] ? plus : trashcan,
          },
        ],
      },
    });
  }, [componentId, issue.number, bookmarksScheme, rightButtonId]);

  return (
    <IssueDetailsScreen issue={issue} issueCommentsList={issueCommentsList} />
  );
};
