import {StyleSheet} from 'react-native';
import {appColors} from '../../../../common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: appColors.borderColor,
    backgroundColor: appColors.background,
  },
  listWrapperContainer: {
    backgroundColor: appColors.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: appColors.borderColor,
  },
  listContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: appColors.borderColor,
  },
  secmentedControl: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  spinner: {
    flex: 1,
  },
});
