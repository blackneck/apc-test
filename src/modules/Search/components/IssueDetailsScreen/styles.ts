import {StyleSheet} from 'react-native';
import {appColors} from 'src/common/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: appColors.background,
  },
  listContainer: {
    padding: 15,
  },
  descriptionContainer: {
    backgroundColor: appColors.foreground,
    padding: 10,
    marginBottom: 30,
    borderRadius: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  commentContainer: {
    backgroundColor: appColors.foreground,
    padding: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: appColors.borderColor,
  },
  separator: {
    height: 30,
    width: 1,
    backgroundColor: appColors.borderColor,
    marginLeft: 30,
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
