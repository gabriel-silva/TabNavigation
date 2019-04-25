import {StyleSheet, Platform} from "react-native";

export default StyleSheet.create({
    footerTab: {
        ...Platform.select({
            android: {
                backgroundColor: "#f5f5f5"
            },
            ios: {}
        }),
    },
    icon: {
        color: "black"
    },
    text: {
        fontSize: 13,
        color: "black"
    }
});