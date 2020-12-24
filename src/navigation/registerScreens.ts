import {Navigation} from 'react-native-navigation';

import Search from 'src/modules/Search';
import Bookmarks from 'src/modules/Bookmarks';
import IssueDetails from 'src/modules/Search/containers/IssueDetailsScreenContainer';
import StoreProvider from 'src/store/StoreProvider';
import SortModal from 'src/modules/Search/containers/SortModalContainer';

export default () => {
  Navigation.registerComponent('Search', () => StoreProvider(Search));
  Navigation.registerComponent('Bookmarks', () => StoreProvider(Bookmarks));
  Navigation.registerComponent('IssueDetails', () =>
    StoreProvider(IssueDetails),
  );
  Navigation.registerComponent('SortModal', () => SortModal);
};
