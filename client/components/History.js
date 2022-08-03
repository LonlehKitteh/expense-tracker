import React from 'react'
import Section from '../layout/Section'
import Card from '../layout/Card'
import { useExpense } from '../context/ExpenseContext'
import { StyleSheet, View, Text } from 'react-native'

const History = () => {
    const [expenses, dispatch] = useExpense()

    return (
        <Section title="History">
            {
                expenses.map(expense => {
                    return <Card
                        key={expense.id}
                        id={expense.id}
                        dispatch={dispatch}
                        name={expense.properties.name}
                        value={expense.properties.value}
                    />
                })
            }
        </Section>
    )
}

export default History