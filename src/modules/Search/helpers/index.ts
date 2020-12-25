import {Navigation} from 'react-native-navigation';

import {SORT_MODAL_ID} from 'src/navigation/componentIds';

export const showSortModal = ({
  currentSort,
  onSubmit,
}: {
  currentSort: 'created' | 'updated' | 'comments';
  onSubmit: (sortValue: 'created' | 'updated' | 'comments') => void;
}) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: SORT_MODAL_ID,
            name: 'SortModal',
            passProps: {currentSort, onSubmit},
            options: {
              topBar: {
                title: {
                  text: 'Sort issues',
                },
              },
            },
          },
        },
      ],
    },
  });
};
