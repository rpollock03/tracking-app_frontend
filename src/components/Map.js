
import React, { useContext } from "react"
import { Text, StyleSheet, ActivityIndicator } from "react-native"

import MapView, { Polyline, Circle } from "react-native-maps"

import LocationContext from "../context/LocationContext"


const Map = () => {

    const { currentLocation, locations } = useContext(LocationContext)


    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    return <MapView
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    /*region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}*/
    >
        <Circle
            center={currentLocation.coords}
            radius={30}
            strokeColor="rgb(158,158,255)"
            fillColor="rgba(158,158,255,0.3)"
        />
        <Polyline coordinates={locations.map(loc => loc.coords)}
            strokeWidth={6}
            strokeColor='#E5845C'
        />
    </MapView>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map 