import {StyleSheet} from 'react-native';

import {appColors} from 'src/common/colors';

export default StyleSheet.create({
  selectionWrapper: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: appColors.foreground,
    width: '100%',
  },
  selectionCircle: {
    width: 25,
    height: 25,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: appColors.blue,
    alignSelf: 'center',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 7,
    paddingRight: 7,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: appColors.borderColor,
  },
  headerText: {
    fontSize: 12,
    marginBottom: 5,
    opacity: 0.5,
  },
  titleText: {
    fontWeight: '500',
    fontSize: 12,
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
