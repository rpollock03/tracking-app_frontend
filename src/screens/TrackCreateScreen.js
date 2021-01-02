import "../_mockLocation"

import React, { useEffect, useState, useContext } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import { Text } from "react-native-elements"

import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

import LocationContext from "../context/LocationContext"

import Map from "../components/Map"

const TrackCreateScreen = () => {

    const { addLocation } = useContext(LocationContext)
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            await requestPermissionsAsync()

            // tracks user position over time
            await watchPositionAsync({
                //more accuracy uses more battery!
                accuracy: Accuracy.BestForNavigation,
                // update either ever 10m or 1 second
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                addLocation(location)
            })
        } catch (e) {
            setErr(e)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return (<SafeAreaView>
        <Text h2 style={{ textAlign: "center" }}>Create a Track</Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>)
}

const styles = StyleSheet.create({})

export default TrackCreateScreen