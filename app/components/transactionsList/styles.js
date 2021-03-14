import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';
const {width} = Dimensions.get('window');
const imgW = (width - 48) / 2;

export const Styles = StyleSheet.create({
  transactionsList: {
    alignItems: 'center',
    width: imgW,
    justifyContent: 'space-between',
    height: imgW,
    margin: 7,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.androidColor,
    backgroundColor: COLORS.boxColor,
    overflow: 'hidden',
    marginVertical: 10,
  },
  transactionView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 8,
    padding: 8,
    width: '100%',
  },
  receiptImg: {width: 27, height: 27},
  dateTime: {fontSize: 10, fontWeight: 'bold'},
  wrapperTransactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    width: '100%',
    padding: 8,
  },
  status: {width: 25, height: 25, borderRadius: 50},
  merchantLogo: {width: 30, height: 30, borderRadius: 5},
  merchant: {fontSize: 17, fontWeight: 'bold'},
  row: {flexDirection: 'row', alignItems: 'center', padding: 5},
  amountText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 16,
    marginLeft: 3,
  },
});
