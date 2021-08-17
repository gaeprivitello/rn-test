import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const UserButton = ({ username, onPress }) => {
    return (
        <Button key={username} style={styles.button} icon="account" mode="contained" onPress={() => onPress(username)}>
            {username}
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 5
    }
});
