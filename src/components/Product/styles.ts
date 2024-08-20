import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,

    },
    name: {
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },

    buttonText: {
        color: '#fff',
        fontSize: 24,
    },

    button: {
        width: 56,
        height: 56,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

    }
})