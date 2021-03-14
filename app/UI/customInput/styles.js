import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export const Styles = StyleSheet.create({
  inputView: {
    flex: 1,
    height: 35,
    justifyContent: 'center',
    position: 'relative',
  },

  input: {
    backgroundColor: COLORS.TextColor,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
