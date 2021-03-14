import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import STATUSCOLORS from '../../constants/statusColors';
import CURRENCY from '../../constants/currency';
import {Styles as styles} from './styles';
import COLORS from '../../constants/colors';
const TransactionItem = ({dateTime, AddReceiptPhoto, transactionPicker}) => {
  console.log('tr', transactionPicker);
  return (
    <ScrollView style={styles.mealItem}>
      <View>
        {transactionPicker.receipt_url ? (
          <Image
            source={{uri: transactionPicker.receipt_url}}
            style={styles.receptUri}
          />
        ) : (
          <View style={styles.imagePicker}>
            <TouchableOpacity style={styles.button} onPress={AddReceiptPhoto}>
              <Text style={styles.addReceipt}>Add Receipt</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.titleContainer}>
          <Image
            source={{uri: transactionPicker.merchant_logo}}
            style={styles.merchantLogo}
          />

          <Text style={styles.title} numberOfLines={1}>
            {transactionPicker.merchant}
          </Text>
          <Text style={styles.merchantText}>
            {transactionPicker.amount}
            <Text>{CURRENCY[transactionPicker.currency]}</Text>
          </Text>
        </View>
        <View style={styles.dateTime}>
          <Text style={styles.merchantText}>{dateTime}</Text>
          <View
            style={[
              styles.status,
              {backgroundColor: STATUSCOLORS[transactionPicker.status]},
            ]}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TransactionItem;
