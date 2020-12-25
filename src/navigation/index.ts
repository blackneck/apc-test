import {Navigation} from 'react-native-navigation';

import {appColors} from 'src/common/colors';
import {bookmarkTabIcon, searchTabIcon} from 'src/common/icons';
import * as componentIds from './componentIds';
import registerScreens from './registerScreens';

registerScreens();

export default () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: componentIds.ROOT_BOTTOM_TABS,
        children: [
          {
            stack: {
              id: componentIds.SEARCH_TAB,
              children: [
                {
                  component: {
                    id: componentIds.SEARCH_SCREEN,
                    name: 'Search',
                    options: {
                      topBar: {
                        title: {
                          text: 'Issues',
                        },
                        rightButtons: [
                          {
                            id: componentIds.SORT_ISSUES_BUTTON_ID,
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
              id: componentIds.BOOKMARKS_TAB,
              children: [
                {
                  component: {
                    id: componentIds.BOOKMARKS_SCREEN,
                    name: 'Bookmarks',
                    options: {
                      topBar: {
                        title: {
                          text: 'Bookmarks',
                        },
                        // rightButtons: [
                        //   {
                        //     id: 'EDIT_BOOKMARKS_BUTTON_ID',
                        //     text: 'Edit',
                        //   },
                        // ],
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Saved',
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
