import {Action} from 'redux-actions';
import {runSaga} from 'redux-saga';

import {RequestIssuesParameters} from 'src/api/types';
import {getIssuesSuccess} from '../actions';
import {testGetApcTestIssuesRequestAction} from '../mocks';
import {handleGetIssuesRequest} from './index';

describe('search sagas', () => {
  it('should handle successful issues request', async () => {
    const dispatched: Array<Action<RequestIssuesParameters>> = [];
    const result = await runSaga(
      {
        dispatch: (action: Action<RequestIssuesParameters>) => {
          dispatched.push(action);
        },
      },
      handleGetIssuesRequest,
      testGetApcTestIssuesRequestAction,
    ).toPromise();

    expect(dispatched).toEqual([getIssuesSuccess({data: [], page: 1})]);
  });
});
