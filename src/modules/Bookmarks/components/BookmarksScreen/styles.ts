import {StyleSheet} from 'react-native';

import {appColors} from 'src/common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  listWrapperContainer: {
    backgroundColor: appColors.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: appColors.borderColor,
  },
});
