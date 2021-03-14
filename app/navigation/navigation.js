import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import TransactionItemScreen from '../screens/transactionItemScreen/TransactionItemScreen';

const RootStack = createStackNavigator();

const navigationRouter = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'index'}
        screenOptions={{unmountOnBlur: true, gestureEnabled: false}}>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          options={({route: {params}}) => ({
            title: params.item.merchant,
            headerTitleAlign: 'center',
          })}
          name="Transactions"
          component={TransactionItemScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default navigationRouter;
