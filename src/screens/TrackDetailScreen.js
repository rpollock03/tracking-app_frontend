import React, { useContext } from "react"
import { View, StyleSheet, SafeAreaView } from "react-native"
import { Text, Header, Button } from "react-native-elements"
import TrackContext from "../context/TrackContext"
import MapView, { Polyline, Marker } from "react-native-maps"
import Spacer from "../components/Spacer"
import * as geolib from 'geolib';

const TrackDetailScreen = ({ route, navigation }) => {

    // get all tracks from context
    const { tracks } = useContext(TrackContext)

    //get track id in question from navigation params passed
    const { _id } = route.params

    // find track in tracks with relevant id
    const track = tracks.find(t => t._id === _id)
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
            <Text>{geolib.getPathLength(track.locations.map(loc => loc.coords))}</Text>
        </Spacer>
        <Spacer>
            <Button title="Delete Track" buttonStyle={{
                backgroundColor: "red"
            }} onPress={console.log("something")} />
        </Spacer>
    </>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackDetailScreen