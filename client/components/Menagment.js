import { Button, Keyboard, SafeAreaView, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { ACTIONS, useExpense } from '../context/ExpenseContext'
import Section from '../layout/Section'
import Input from '../layout/Input'
import COLORS from '../styles/_constants'
import { deleteAll } from '../data/functions'

const Menagment = ({ properties, setProperties }) => {
    const [, dispatch] = useExpense()

    const handlePress = () => {
        Keyboard.dismiss();
        dispatch({ type: ACTIONS.ADD_EXPENSE, payload: { id: Date.now(), properties: properties } })
        setProperties({ name: "", value: 0 })
    }

    const handleDelete = () => {
        deleteAll(() => dispatch({ type: ACTIONS.DELETE_ALL }))
    }

    return (
        <Section title="Menagment">
            <Input setProperties={setProperties} properties={properties} title="text" />
            <Input setProperties={setProperties} properties={properties} title="amount" />
            <SafeAreaView style={styles.Button}>
                <Button color={COLORS.MAIN_THEME.getColor()} onPress={handlePress} title="Add transaction" />
            </SafeAreaView>
            <SafeAreaView style={styles.Button}>
                <Button color={COLORS.DANGER.getColor()} onPress={handleDelete} title="Delete all" />
            </SafeAreaView>
        </Section>
    )
}

const styles = StyleSheet.create({
    Button: {
        marginVertical: 4
    }
})

export default Menagment