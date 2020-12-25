import {Action} from 'redux-actions';

import {addBookmark, removeBookmark} from '../actions';
import {Bookmark} from '../types';

export const testIsueHtmlUrl: string =
  'https://github.com/test-org/test-repo/1';

export const testBookamrk: Bookmark = {
  body: 'test-issue-body',
  organisation: 'test-org',
  repository: 'test-repo',
  title: 'test-issue',
  state: 'closed',
  html_url: testIsueHtmlUrl,
};

export const testAddBookmarkAction: Action<Bookmark> = {
  type: addBookmark.toString(),
  payload: testBookamrk,
};

export const testRemoveBookmarkAction: Action<string> = {
  type: removeBookmark.toString(),
  payload: testIsueHtmlUrl,
};
