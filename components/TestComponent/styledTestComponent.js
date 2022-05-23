import { StyleSheet } from "react-native";

export const testStyles = StyleSheet.create({
    componentContainer: {
        paddingTop: 100,
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
    },
    imageContainer: {
        width: "100%",
        marginBottom: 50
    },
    instagramLogo: {
        width: "100%",
        resizeMode: "contain"
    },
    inputContainer: {
        marginVertical: 8
    },
    input: {
        height: 40,
        borderColor: 'rgb(177,177,195)',
        borderWidth: 1,
        color: "rgb(177,177,195)",
        width: "90%",
        alignSelf: "center",
        paddingLeft: 16
    }
});