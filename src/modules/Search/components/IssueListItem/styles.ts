import {StyleSheet} from 'react-native';

import {appColors} from 'src/common/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: appColors.foreground,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 7,
    paddingRight: 7,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: appColors.borderColor,
  },
  titleText: {
    fontWeight: '500',
  },
  labelsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  labelContainer: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    margin: 2,
  },
  icon: {
    marginTop: 7,
    marginHorizontal: 15,
  },
  open: {
    color: appColors.green,
  },
  closed: {
    color: appColors.red,
  },
});
