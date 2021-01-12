import React, { useContext } from "react"
import { View, StyleSheet, SafeAreaView } from "react-native"
import { Text } from "react-native-elements"
import TrackContext from "../context/TrackContext"
import MapView, { Polyline, Marker } from "react-native-maps"

const TrackDetailScreen = ({ route, navigation }) => {

    // get all tracks from context
    const { tracks } = useContext(TrackContext)

    //get track id in question from navigation params passed
    const { _id } = route.params

    // find track in tracks with relevant id
    const track = tracks.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords

    return <SafeAreaView>


        <Text h2 style={{ textAlign: "center" }}>{track.name} </Text>
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
    </SafeAreaView>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackDetailScreen