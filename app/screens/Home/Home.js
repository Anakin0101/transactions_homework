import React, {useState} from 'react';
import {View} from 'react-native';
import CustomHeaderComponent from '../../UI/customHeader/CustomHeader';
import TransactionsComponent from '../../components/transactions/TransactionsComponent';
import {Styles as styles} from './styles';

const Home = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.main}>
      <CustomHeaderComponent setText={setText} text={text} />
      <TransactionsComponent searchedMerchant={text} navigation={navigation} />
    </View>
  );
};

export default Home;
