import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../styles/_constants'
import { mixins } from '../styles/_mixins'

const Input = ({ title, properties, setProperties }) => {

    const handleChange = (event, type) => {
        return setProperties({ ...properties, [type]: event === '-' && type === " value" ? `-${+event}` : event })
    }

    return (
        <View>
            {
                title === 'text' ?
                    <React.Fragment>
                        <Text style={styles.Text}>Text</Text>
                        <TextInput
                            style={styles.Input}
                            keyboardType="default"
                            value={properties.name || ""}
                            placeholder='Enter text...'
                            onChangeText={e => handleChange(e, "name")}
                        />
                    </React.Fragment> :
                    <React.Fragment>
                        <Text style={styles.Text}>Amount</Text>
                        <Text style={{ marginTop: -4 }}>(negative - epense, positive - income)</Text>
                        <TextInput
                            style={styles.Input}
                            keyboardType="numeric"
                            value={properties.value || ""}
                            placeholder='Enter amount...'
                            onChangeText={e => handleChange(e, "value")}
                        />
                    </React.Fragment>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        ...mixins.roboto(COLORS.SECONDARY_TEXT())
    },
    Input: {
        backgroundColor: "white",
        marginHorizontal: 2,
        marginVertical: 7,
        paddingHorizontal: 6,
        paddingVertical: 3
    }
})

export default Input