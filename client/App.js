import React, { useReducer, useState } from 'react';
import { StatusBar, Text, SafeAreaView } from 'react-native';
import Balance from './components/Balance';
import Menagment from './components/Menagment';
import History from './components/History';
import { ACTIONS } from './constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles/App';
import COLORS from './styles/_constants';

function reducer(expenses, action) {
  switch (action.type) {
    case ACTIONS.ADD_EXPENSE:
      return action.payload.properties.name && action.payload.properties.value ? [...expenses, newExpense(action.payload.properties)] : expenses
    case ACTIONS.DELETE_EXPENSE:
      return expenses.filter(expense => expense.id !== action.payload.id)
    case ACTIONS.DELETE_ALL:
      return []
    default:
      return expenses
  }
}

function newExpense(properties) {
  return { id: Date.now(), properties: properties }
}

export default function App() {
  const [expenses, dispatch] = useReducer(reducer, [])
  const [properties, setProperties] = useState({})
  // async function test() {
  //   try {
  //     await AsyncStorage.setItem('test', "hi")
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // test()

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar backgroundColor={COLORS.MAIN_THEME.lighten(10)} />
      <Text style={styles.text}>Expense Tracker</Text>
      <Balance expenses={expenses} />
      <Menagment properties={properties} setProperties={setProperties} dispatch={dispatch} />
      <History expenses={expenses} dispatch={dispatch} />
    </SafeAreaView>
  );
}
