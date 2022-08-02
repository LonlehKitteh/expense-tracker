import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { mixins } from '../styles/_mixins'
import COLORS from '../styles/_constants'

const Section = (props) => {
    return (
        <SafeAreaView style={styles.Section}>
            <Text style={styles.Title}>{props.title}</Text>
            <Text style={styles.Devider}></Text>
            {props.children}
        </SafeAreaView>
    )
}

export default Section

const styles = StyleSheet.create({
    Section: {
        marginVertical: 10
    },
    Devider: {
        width: '100%',
        height: 1,
        backgroundColor: '#42445a',
        marginVertical: 5,
        borderRadius: 100
    },
    Title: mixins.roboto(COLORS.SECONDARY_TEXT())
})