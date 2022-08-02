import { Button } from 'react-native'
import React from 'react'
import { ACTIONS } from '../constants/constants'
import Section from '../layout/Section'
import Input from '../layout/Input'

const Menagment = ({ properties, setProperties, dispatch }) => {
    const handlePress = e => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_EXPENSE, payload: { properties: properties } })
        setProperties({ name: "", value: 0 })
    }
    return (
        <Section title="Add new transaction">
            <Input setProperties={setProperties} properties={properties} title="text" />
            <Input setProperties={setProperties} properties={properties} title="amount" />
            <Button onPress={handlePress} title="Add transaction" />
            <Button onPress={() => dispatch({ type: ACTIONS.DELETE_ALL })} title="Delete all" />
        </Section>
    )
}

export default Menagment