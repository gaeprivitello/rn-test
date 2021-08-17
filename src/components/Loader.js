import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const Loader = ({text = "Loading..."}) => {

    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} />
            <Text style={{margin: 5}} >{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});
