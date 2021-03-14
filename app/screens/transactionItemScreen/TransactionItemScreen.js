import React, {useContext, useMemo} from 'react';
import {ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {TContext} from '../../context/TransactionsContext';
import {Styles as styles} from './styles';
import TransactionItem from '../../components/transactionItem/TransactionItem';

const TransactionItemScreen = ({route}) => {
  const {item, dateTime} = route.params;
  const {transactions, transactionsReceipt} = useContext(TContext);

  const transactionPicker = useMemo(() => {
    return transactions.find(i => i.id === item.id);
  }, [item.id, transactions]);

  const AddReceiptPhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      e => {
        transactionsReceipt(item.id, e.uri);
      },
    );
  };

  return (
    <ScrollView style={styles.scrollWrapper}>
      <TransactionItem
        item={item}
        dateTime={dateTime}
        AddReceiptPhoto={AddReceiptPhoto}
        transactionPicker={transactionPicker}
        transactions={transactions}
        transactionsReceipt={transactionsReceipt}
      />
    </ScrollView>
  );
};

export default TransactionItemScreen;
