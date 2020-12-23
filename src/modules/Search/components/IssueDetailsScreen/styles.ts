import {StyleSheet} from 'react-native';
import {appColors} from '../../../../common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  descriptionContainer: {
    backgroundColor: appColors.foreground,
    padding: 10,
    marginBottom: 30,
  },
  commentContainer: {
    backgroundColor: appColors.foreground,
    padding: 20,
  },
  separator: {
    height: 30,
    width: 5,
    backgroundColor: appColors.foreground,
    marginLeft: 30,
  },
  listContainer: {
    backgroundColor: appColors.background,
    padding: 15,
  },
  commentUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 20,
  },
});
