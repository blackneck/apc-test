import {StyleSheet} from 'react-native';
import {appColors} from '../../../../common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  listWrapperContainer: {
    marginTop: 100,
    backgroundColor: appColors.background,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: appColors.foreground,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: appColors.borderColor,
  },
});
