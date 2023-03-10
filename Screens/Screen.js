import { StyleSheet,Text, View, SafeAreaView } from "react-native"
import React from "react"
import constants from 'expo'

export default function Screen(children, style) {
    return(
        <SafeAreaView style={[styles.screen,style]}>
        {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: constants.statusBarHeight,
        flex: 1,


    }
});