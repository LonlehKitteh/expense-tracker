import { StyleSheet } from "react-native";
import COLORS from "./_constants";
import { mixins } from "./_mixins";

export const styles = StyleSheet.create({
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
})