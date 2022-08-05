import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

async function setData(data) {
    try {
        await AsyncStorage.setItem(`expense-${data.id}`, JSON.stringify(data))
    } catch (error) {
        alert(error)
    }
}

async function deleteData(id) {
    try {
        await AsyncStorage.removeItem(`expense-${id}`)
    } catch (error) {
        alert(error)
    }
}

async function getData() {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const result = await AsyncStorage.multiGet(keys).then(data => data.map(req => JSON.parse(req[1])))

        return result

    } catch (error) {
        alert(error)
    }
}

function deleteAll(callback) {
    Alert.alert("Danger", "Do you want to delete all records?", [
        {
            text: "Delete",
            onPress: () => {
                AsyncStorage.clear()
                callback()
            }
        },
        {
            text: "No"
        }
    ],
        {
            cancelable: true
        })
}

export { setData, getData, deleteAll, deleteData }