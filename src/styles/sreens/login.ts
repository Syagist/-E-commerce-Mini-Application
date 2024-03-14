import {StyleSheet} from "react-native";

export const login = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%"
    },
    title: {
        width: '100%',
        textAlign: "center",
        fontSize: 24,
        lineHeight: 30,
        fontWeight: "500",
        textTransform: "uppercase"
    },
    input_wrapper: {
        width: '100%',
    },
    logo_wrapper: {
        width: '100%',
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginTop:30
    },
    logo: {
        width: 140,
        height: 84,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        objectFit: 'cover'
    },
});