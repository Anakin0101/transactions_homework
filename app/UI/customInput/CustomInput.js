import React from 'react';
import {View, TextInput} from 'react-native';
import {Styles as styles} from './styles';

const CustomInput = ({setText}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        placeholder="Find your merchant"
        onChangeText={e => {
          setText(e);
        }}
        style={styles.input}></TextInput>
    </View>
  );
};

export default CustomInput;
