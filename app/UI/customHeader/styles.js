import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
export const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.searchColor,
    paddingHorizontal: 15,
    width: '100%',
  },
});
