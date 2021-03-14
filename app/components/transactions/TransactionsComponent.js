import React, {useEffect, useContext, useState} from 'react';
import {View, FlatList, Platform} from 'react-native';
import TransactionsListComponent from '../transactionsList/TransactionsListComponent';
import {TContext} from '../../context/TransactionsContext';
import {Styles as styles} from './styles';

const TransactionsComponent = ({searchedMerchant, navigation}) => {
  let columns = 2;
  const {transactions} = useContext(TContext);
  const [searchedResult, setSearchedResult] = useState(transactions);

  const AvailableTransactions = ({item}) => {
    return <TransactionsListComponent item={item} navigation={navigation} />;
  };

  useEffect(() => {
    setSearchedResult(
      transactions.filter(item => {
        return item.merchant
          .toLowerCase()
          .includes(searchedMerchant.toLowerCase());
      }),
    );
  }, [searchedMerchant]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        numColumns={columns}
        data={searchedResult}
        removeClippedSubviews={true}
        initialNumToRender={4}
        updateCellsBatchingPeriod={1}
        windowSize={7}
        onEndReachedThreshold={Platform.OS === 'android' ? 1 : 0}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return <AvailableTransactions item={item} />;
        }}
      />
    </View>
  );
};

export default TransactionsComponent;
