import {
  testGetIssuesFailAction,
  testGetIssuesSuccessAction,
  testGetIssuesWithPageSuccessAction,
  testIssue0,
  testIssue1,
} from '../mocks';
import reducer, {initialState} from '../reducers';

describe('search reducer', () => {
  it('should update seacrh results', () => {
    expect(reducer(initialState, testGetIssuesSuccessAction)).toEqual({
      ...initialState,
      isIssuesLoading: false,
      issuesList: testGetIssuesSuccessAction.payload.data,
    });
  });

  it('should update page number and append new seacrh results', () => {
    expect(
      reducer(
        {...initialState, issuesList: [testIssue0]},
        testGetIssuesWithPageSuccessAction,
      ),
    ).toEqual({
      ...initialState,
      isIssuesLoading: false,
      currentIssuesPage: testGetIssuesWithPageSuccessAction.payload.page,
      issuesList: [
        testIssue0,
        ...testGetIssuesWithPageSuccessAction.payload.data,
      ],
    });
  });

  it('should reset search state to initioal value', () => {
    expect(
      reducer(
        {
          ...initialState,
          issuesList: [testIssue0, testIssue1],
          currentIssuesPage: 2,
        },
        testGetIssuesFailAction,
      ),
    ).toEqual({
      ...initialState,
      error: testGetIssuesFailAction.payload,
    });
  });
});
