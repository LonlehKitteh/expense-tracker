import React, { useState } from 'react';
import { StatusBar, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Balance from './components/Balance';
import Menagment from './components/Menagment';
import History from './components/History';
import COLORS from './styles/_constants';
import { mixins } from './styles/_mixins';
import { ExpenseProvider } from './context/ExpenseContext';

export default function App() {
  const [properties, setProperties] = useState({})


  return (
    <ExpenseProvider>
      <SafeAreaView style={styles.app}>
        <StatusBar backgroundColor={COLORS.MAIN_THEME.lighten(10)} />
        <Text style={styles.text}>Expense Tracker</Text>
        <Balance />
        <ScrollView>
          <History />
        </ScrollView>
        <Menagment properties={properties} setProperties={setProperties} />
      </SafeAreaView>
    </ExpenseProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: COLORS.MAIN_THEME.lighten(30),
    flex: 1,
    flexDirection: "column"
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    ...mixins.roboto(COLORS.SECONDARY_TEXT()),
    marginBottom: 10
  },
  scrollView: {
    backgroundColor: COLORS.MAIN_THEME.lighten(30),
    marginHorizontal: 20
  }
})
