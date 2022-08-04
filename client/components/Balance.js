import { Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { mixins } from '../styles/_mixins'
import COLORS from '../styles/_constants'
import { useExpense } from '../context/ExpenseContext'

const ACTIONS = {
    COUNT_BALANCE: 'balance',
    INCOME: 'income',
    EXPENSE: 'expense'
}

const Balance = () => {
    const [expenses] = useExpense()

    const countExpenses = ({ type }) => {
        let temp = []
        expenses.map(expense => temp.push(expense.properties.value))

        switch (type) {
            case ACTIONS.COUNT_BALANCE:
                return (temp.reduce((p, c) => +p + +c, 0)).toFixed(2)
            case ACTIONS.INCOME:
                return (temp.filter(e => e > 0).reduce((p, c) => +p + +c, 0)).toFixed(2)
            case ACTIONS.EXPENSE:
                return (temp.filter(e => e < 0).reduce((p, c) => +p + +c, 0) * -1).toFixed(2)
            default:
                return temp
        }
    }

    return (
        <SafeAreaView style={styles.Balance}>
            <SafeAreaView style={styles.Data}>
                <Text style={styles.AccountText}>Your balance</Text>
                <Text style={styles.AccountValue}>{`${countExpenses({ type: ACTIONS.COUNT_BALANCE })}$`}</Text>
            </SafeAreaView>
            <SafeAreaView style={[styles.Payment, styles.elevation]}>
                <SafeAreaView style={styles.ViewData}>
                    <Text style={styles.PaymentText}>income</Text>
                    <Text style={styles.Income}>{`$${countExpenses({ type: ACTIONS.INCOME })}`}</Text>
                </SafeAreaView>
                <Text style={styles.Devider}></Text>
                <SafeAreaView style={styles.ViewData}>
                    <Text style={styles.PaymentText}>expense</Text>
                    <Text style={styles.Expense}>{`$${countExpenses({ type: ACTIONS.EXPENSE })}`}</Text>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Balance: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    Data: {
        alignSelf: "flex-start",
        marginVertical: 6
    },
    AccountText: {
        fontSize: 13,
        marginVertical: -6,
        textTransform: "uppercase",
        ...mixins.roboto(COLORS.SECONDARY_TEXT())
    },
    AccountValue: {
        ...mixins.roboto(COLORS.MAIN_TEXT),
        fontSize: 26
    },
    Payment: {
        marginVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 4
    },
    elevation: {
        elevation: 4,
        shadowColor: '#42445a'
    },
    Devider: {
        height: '60%',
        width: 2,
        borderRadius: 40,
        backgroundColor: '#24445a30'
    },
    ViewData: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16
    },
    PaymentText: {
        ...mixins.roboto(COLORS.SECONDARY_TEXT()),
        textTransform: 'uppercase',
        fontSize: 13
    },
    Income: mixins.roboto(COLORS.SUCCESS.getColor()),
    Expense: mixins.roboto(COLORS.DANGER.getColor())
})

export default Balance