import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export const Styles = StyleSheet.create({
  receptUri: {width: '100%', height: 500, resizeMode: 'contain'},
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    position: 'absolute',
    borderTopEndRadius: 15,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 13,
    left: 10,
    width: '97%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    borderRadius: 10,
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: COLORS.buttonColor,
    elevation: 2, // Android
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addReceipt: {
    color: COLORS.TextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  merchantLogo: {width: 30, height: 30},
  dateTime: {
    marginVertical: -10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    marginLeft: 6,
    overflow: 'hidden',
    width: '97%',
    justifyContent: 'space-between',
    height: 60,
  },
  imagePicker: {
    height: 500,

    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  merchantText: {
    color: COLORS.TextColor,
  },
  title: {
    fontFamily: 'opensans-bold',
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.TextColor,
  },
  status: {
    borderRadius: 50,
    width: 25,
    height: 25,
  },
});
