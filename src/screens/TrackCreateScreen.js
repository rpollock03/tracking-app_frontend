import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import { Text } from "react-native-elements"


import Map from "../components/Map"

const TrackCreateScreen = () => {
    return (<SafeAreaView>
        <Text h2 style={{ textAlign: "center" }}>Create a Track</Text>
        <Map />
    </SafeAreaView>)
}

const styles = StyleSheet.create({})

export default TrackCreateScreen