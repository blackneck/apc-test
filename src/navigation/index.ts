import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import {appColors} from '../common/colors';

import registerScreens from './registerScreens';

registerScreens();

const searchIcon = Icon.getImageSourceSync('search', 20);
const bookmarkIcon = Icon.getImageSourceSync('bookmark', 20);

export default () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'ROOT_BOTTOM_TABS',
        children: [
          {
            stack: {
              id: 'SEARCH_TAB',
              children: [
                {
                  component: {
                    id: 'SEARCH_SCREEN',
                    name: 'Search',
                    options: {
                      topBar: {
                        rightButtons: [
                          {
                            id: 'SORT_ISSUES_BUTTON_ID',
                            text: 'Sort',
                          },
                        ],
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Explore',
                  icon: searchIcon,
                  selectedIconColor: appColors.blue,
                  selectedTextColor: appColors.blue,
                },
              },
            },
          },
          {
            stack: {
              id: 'BOOKAMARKS_TAB',
              children: [
                {
                  component: {
                    id: 'BOOKMARKS_SCREEN',
                    name: 'Bookmarks',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Bookmarks',
                  icon: bookmarkIcon,
                  selectedIconColor: appColors.blue,
                  selectedTextColor: appColors.blue,
                },
              },
            },
          },
        ],
      },
    },
  });
};
