import {addBookmark, removeBookmark} from '.';
import {
  testAddBookmarkAction,
  testBookamrk,
  testIsueHtmlUrl,
  testRemoveBookmarkAction,
} from '../mocks';

describe('bookmark actions', () => {
  it('should create an action to add a bookmark', () => {
    expect(addBookmark(testBookamrk)).toEqual(testAddBookmarkAction);
  });

  it('should create an action to remove a bookmark', () => {
    expect(removeBookmark(testIsueHtmlUrl)).toEqual(testRemoveBookmarkAction);
  });
});
