import React, { useContext, useState } from "react"
import { View, StyleSheet, SafeAreaView } from "react-native"
import { Text, Header, Button } from "react-native-elements"
import TrackContext from "../context/TrackContext"
import MapView, { Polyline, Marker } from "react-native-maps"
import Spacer from "../components/Spacer"
import * as geolib from 'geolib';

const TrackDetailScreen = ({ route, navigation }) => {

    // get all tracks from context
    const { tracks, deleteTrack } = useContext(TrackContext)

    //get track id in question from navigation params passed
    const { _id } = route.params

    // find track in tracks with relevant id
    const track = tracks.find(t => t._id === _id)

    function getDate(timestamp) {
        let date = new Date(timestamp)
        let dayOfMonth = date.getDate()
        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let dayOfWeek = daysOfWeek[date.getDay()]
        let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let month = monthsOfYear[date.getMonth()]
        let suffix = "th"
        if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) suffix = "st"
        if (dayOfMonth === 2 || dayOfMonth === 22) suffix = "nd"
        if (dayOfMonth === 3 || dayOfMonth === 23) suffix = "rd"

        return (`${dayOfWeek}, ${month} ${dayOfMonth}${suffix}`)
    }



    if (track) {
        const initialCoords = track.locations[0].coords
        return <>
            <Header
                centerComponent={{ text: track.name, style: { fontSize: 30, color: '#fff' } }}
            />
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
            >

                <Polyline coordinates={track.locations.map(loc => loc.coords)} strokeWidth={6}
                    strokeColor='#E5845C' />

                <Marker coordinate={initialCoords} pinColor="green" />
            </MapView>
            <Spacer>
                <Text h4>On {getDate(track.locations[0].timestamp)}, you went for a {geolib.getPathLength(track.locations.map(loc => loc.coords))} meter {track.category.toLowerCase()}.</Text>
            </Spacer>
            <Spacer>
                <Button title="Delete Track" buttonStyle={{
                    backgroundColor: "red"
                }} onPress={() => {
                    navigation.goBack();
                    deleteTrack(_id)
                }} />
            </Spacer>
        </>
    }
    else return null
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackDetailScreen