import {Navigation} from 'react-native-navigation';

import {appColors} from 'src/common/colors';
import {bookmarkTabIcon, searchTabIcon} from 'src/common/icons';
import registerScreens from './registerScreens';

registerScreens();

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
                  icon: searchTabIcon,
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
                    // options: {
                    //   topBar: {
                    //     rightButtons: [
                    //       {
                    //         id: 'EDIT_BOOKMARKS_BUTTON_ID',
                    //         text: 'Edit',
                    //       },
                    //     ],
                    //   },
                    // },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Bookmarks',
                  icon: bookmarkTabIcon,
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
