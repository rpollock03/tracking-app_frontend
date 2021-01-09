import React, { useContext } from "react"
import { View, StyleSheet, Text } from "react-native"
import TrackContext from "../context/TrackContext"


const TrackDetailScreen = ({ route, navigation }) => {

    // get all tracks from context
    const { tracks } = useContext(TrackContext)

    //get track id in question from navigation params passed
    const { _id } = route.params

    // find track in tracks with relevant id
    const track = tracks.find(t => t._id === _id)

    return <Text style={{ fontSize: 48 }}>{track.name}</Text>
}

const styles = StyleSheet.create({})

export default TrackDetailScreen