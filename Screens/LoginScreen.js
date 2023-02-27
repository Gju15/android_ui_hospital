import { StyleSheet,Text, View } from "react-native"
import React from "react"
import Screen from "./Screen";

export default function LoginScreen() {
    return (
        <Screen>
        <Text>Login Screen</Text>
        </Screen>
    )      
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    }
});