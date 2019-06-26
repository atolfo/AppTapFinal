import {StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#212926"
    },
    list: {
        padding: 20
    },
    reciboContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        width:"100%",
        borderColor: "#DDD",
        borderRadius: 15,
        padding: 20,
        marginBottom: 20
    },
    reciboName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
  
    reciboDate: {
        fontSize: 16,
        color: "#333",
        marginTop: 5,
        lineHeight: 24
    },

    reciboEndereco: {
        fontSize: 16,
        color: "#333",
        marginTop: 5,
        lineHeight: 24
    },
    reciboEmail: {
        fontSize: 16,
        color: "#333",
        marginTop: 5,
        lineHeight: 24
    },
    reciboPhone: {
        fontSize: 16,
        color: "#333",
        marginTop: 5,
        lineHeight: 24
    },
    reciboDescription: {
        fontSize: 16,
        color: "#333",
        marginTop: 5,
        lineHeight: 24
    },
    button: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#fec503",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    buttonText: {
        fontSize: 16,
        color: "#fec503",
        fontWeight: "bold"
    },

    textcolorwhite: {
        color: 'white',

    }

})

export default styles;