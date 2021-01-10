import React, { useContext } from "react"
import { View, StyleSheet, Text } from "react-native"
import TrackContext from "../context/TrackContext"
import MapView, { Polyline } from "react-native-maps"

const TrackDetailScreen = ({ route, navigation }) => {

    // get all tracks from context
    const { tracks } = useContext(TrackContext)

    //get track id in question from navigation params passed
    const { _id } = route.params

    // find track in tracks with relevant id
    const track = tracks.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords

    return <>
        <Text style={{ fontSize: 48 }}>{track.name}</Text>
        <MapView
            style={styles.map}
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
    </>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackDetailScreen