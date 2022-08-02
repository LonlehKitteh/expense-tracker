import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({ title, properties, setProperties }) => {

    const handleChange = (event, type) => {
        return setProperties({ ...properties, [type]: event === '-' && type === " value" ? `-${+event}` : event })
    }

    return (
        <View>
            {
                title === 'text' ?
                    <React.Fragment>
                        <Text>Text</Text>
                        <TextInput
                            keyboardType="default"
                            value={properties.name || ""}
                            placeholder='Enter text...'
                            onChangeText={e => handleChange(e, "name")}
                        />
                    </React.Fragment> :
                    <React.Fragment>
                        <Text>Amount</Text>
                        <Text>(negative - epense, positive - income)</Text>
                        <TextInput
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

export default Input