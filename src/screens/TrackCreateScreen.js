//import "../_mockLocation"

import React, { useContext, useCallback } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import { Text, Header } from "react-native-elements"
import { useIsFocused } from '@react-navigation/native';

//Context and hooks
import LocationContext from "../context/LocationContext"
import useLocation from "../hooks/useLocation"

//Components
import TrackForm from "../components/TrackForm"
import Map from "../components/Map"

import { Entypo } from '@expo/vector-icons';


const TrackCreateScreen = () => {
    // boolean, true if user on TrackCreateScreen
    const isFocused = useIsFocused();

    // isRecording and addLocation helper function from context
    const { addLocation, isRecording } = useContext(LocationContext)

    // callback to use with the useeffect in useLocation. 
    // as long as dependency (isrecording) doesnt change, function is not re-created from scratch. If its the same function, then useeffect function wont run and recording wont start.
    const callback = useCallback(
        location => {
            addLocation(location, isRecording)
        }, [isRecording])

    //call useLocation hook, to track user location if EITHER user is on current screen OR user has started recording
    const [err] = useLocation(isFocused || isRecording, callback)




    return (<>
        <Header
            centerComponent={{ text: 'Create a Track', style: { fontSize: 30, color: '#fff' } }}
        />

        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm />
    </>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen