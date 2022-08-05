import { Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Animated, Easing, LayoutAnimation } from 'react-native'
import React, { useState } from 'react'
import { ACTIONS } from '../context/ExpenseContext'
import COLORS from '../styles/_constants'
import { mixins } from '../styles/_mixins'

const Card = ({ name, value, dispatch, id }) => {
    const [animatePress] = useState(new Animated.Value(0))

    const handleLongPress = () => {
        LayoutAnimation.easeInEaseOut()
        dispatch({ type: ACTIONS.DELETE_EXPENSE, payload: { id: id } })
    }

    const handlePressIn = () => {
        Animated.timing(animatePress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.ease,
            useNativeDriver: false
        }).start()
    }


    const handlePressOut = () => {
        Animated.timing(animatePress, {
            toValue: 0,
            duration: 2000,
            easing: Easing.ease,
            useNativeDriver: false
        }).start()
    }

    const interpolate = animatePress.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%']
    })

    return (
        <TouchableWithoutFeedback delayLongPress={2000} onLongPress={handleLongPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <SafeAreaView style={styles.Card}>
                <SafeAreaView style={[styles.Container, styles.elevation, { borderRightColor: value > 0 ? COLORS.SUCCESS.getColor() : COLORS.DANGER.getColor() }]}>
                    <SafeAreaView style={styles.View}>
                        <Text style={styles.Name}>{name}</Text>
                        <Text style={styles.Devider}></Text>
                        <Text style={styles.Name}>{value > 0 ? `+ ${Number(value).toFixed(2)}` : `- ${Number(value * -1).toFixed(2)}`}</Text>
                    </SafeAreaView>
                    <Animated.View style={[styles.Progress, { width: interpolate }]}></Animated.View>
                </SafeAreaView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default Card

const styles = StyleSheet.create({
    Card: {
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Container: {
        width: '95%',
        backgroundColor: 'white',
        borderRightColor: "transparent",
        borderRightWidth: 7,
        borderRadius: 5,
    },
    elevation: {
        elevation: 4,
        shadowColor: '#42445a'
    },
    View: {
        padding: 10,
        alignItems: "stretch",
        flexDirection: "row",
    },
    Devider: {
        flex: 1
    },
    Name: mixins.roboto(COLORS.SECONDARY_TEXT()),
    Progress: {
        backgroundColor: "crimson",
        height: 3,
        position: "absolute",
        bottom: 0,
        left: 0
    }
})