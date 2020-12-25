import {testAddBookmarkAction, testRemoveBookmarkAction} from '../mocks';
import reducer, {initialState} from '../reducers';

describe('bookmarks reducer', () => {
  it('should add new issue to bookmarks', () => {
    expect(reducer(initialState, testAddBookmarkAction)).toEqual({
      ...initialState,
      bookmarksScheme: {
        ...initialState.bookmarksScheme,
        [testAddBookmarkAction.payload.html_url]: testAddBookmarkAction.payload,
      },
    });
  });

  it('should remove added issue from bookmarks', () => {
    expect(
      reducer(
        {
          ...initialState,
          bookmarksScheme: {
            [testAddBookmarkAction.payload.html_url]:
              testAddBookmarkAction.payload,
          },
        },
        testRemoveBookmarkAction,
      ),
    ).toEqual({
      ...initialState,
    });
  });
});
