import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './store';
import Search from '../modules/Search';
import Bookmarks from '../modules/Bookmarks';
import IssueDetails from '../modules/Search/containers/IssueDetailsScreenContainer';
import {Issue} from '../modules/Search/types';

export default (
  Component: typeof Search | typeof Bookmarks | typeof IssueDetails,
) => (props: {
  componentId: string;
  issue: Issue;
  repository: string;
  organisation: string;
}) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Component {...props} />
    </PersistGate>
  </Provider>
);
