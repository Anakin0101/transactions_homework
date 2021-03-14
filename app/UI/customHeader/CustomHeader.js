import React from 'react';
import {View} from 'react-native';
import CustomInput from '../customInput/CustomInput';
import {Styles as styles} from './styles';
const CustomHeader = ({text, setText}) => {
  return (
    <View style={styles.header}>
      <CustomInput text={text} setText={setText} />
    </View>
  );
};

export default CustomHeader;
