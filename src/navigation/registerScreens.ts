import {Navigation} from 'react-native-navigation';

import Search from '../modules/Search';
import Bookmarks from '../modules/Bookmarks';
import IssueDetails from '../modules/Search/containers/IssueDetailsScreenContainer';
import StoreProvider from '../store/StoreProvider';
import SortModal from '../modules/Search/containers/SortModalContainer';

export default () => {
  Navigation.registerComponent('Search', () => StoreProvider(Search));
  Navigation.registerComponent('Bookmarks', () => StoreProvider(Bookmarks));
  Navigation.registerComponent('IssueDetails', () =>
    StoreProvider(IssueDetails),
  );
  Navigation.registerComponent('SortModal', () => SortModal);
};
