import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import CURRENCY from '../../constants/currency';
import STATUSCOLORS from '../../constants/statusColors';
import {Styles as styles} from './styles';

const TransactionsListComponent = ({item, navigation}) => {
  let dateTime = moment(item.date).utc().format('YYYY-MM-DD HH:mm:ss');
  return (
    <TouchableOpacity
      style={styles.transactionsList}
      onPress={() => {
        navigation.navigate('Transactions', {item: item, dateTime: dateTime});
      }}>
      <View style={styles.transactionView}>
        <Image source={{uri: item.merchant_logo}} style={styles.merchantLogo} />
        <View
          style={[
            styles.status,
            {backgroundColor: STATUSCOLORS[item.status]},
          ]}></View>
      </View>
      <Text style={styles.merchant}>{item.merchant}</Text>

      <View style={styles.row}>
        <Text style={styles.amountText}>{item.amount}</Text>
        <Text style={styles.currency}>{CURRENCY[item.currency]}</Text>
      </View>
      <View style={styles.wrapperTransactions}>
        <View>
          <Text style={styles.dateTime}>{dateTime}</Text>
        </View>
        {item.status === 'CLEARED' || item.status === 'PENDING' ? (
          <View>
            <Image
              source={
                item.receipt_url
                  ? require('../../assets/invoice.png')
                  : require('../../assets/receipt.png')
              }
              style={styles.receiptImg}
            />
          </View>
        ) : (
          <Image
            source={require('../../assets/declined.png')}
            style={styles.receiptImg}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TransactionsListComponent;
