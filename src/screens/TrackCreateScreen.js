import "../_mockLocation"

import React, { useContext } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import { Text } from "react-native-elements"

import { useIsFocused } from '@react-navigation/native';


import useLocation from "../hooks/useLocation"

import LocationContext from "../context/LocationContext"
import TrackForm from "../components/TrackForm"

import Map from "../components/Map"

const TrackCreateScreen = () => {

    const { addLocation, isRecording } = useContext(LocationContext)

    const isFocused = useIsFocused();

    const [err] = useLocation(isFocused, (location) => {
        addLocation(location, isRecording)
    })





    return (<SafeAreaView>
        <Text h2 style={{ textAlign: "center" }}>Create a Track</Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm />
    </SafeAreaView>)
}

const styles = StyleSheet.create({})

export default TrackCreateScreen