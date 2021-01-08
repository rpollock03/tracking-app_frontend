import React, { useContext } from "react"
import { StyleSheet, Text, Button, FlatList, TouchableOpacity } from "react-native"
import TrackContext from "../context/TrackContext"
import { ListItem } from "react-native-elements"


const TrackListScreen = ({ navigation }) => {
    /*
        const { tracks, fetchTracks } = useContext(TrackContext)
    
        React.useEffect(() => {
            const unsubscribe = navigation.addListener('focus', () => {
                fetchTracks()
            });
    
            console.log(tracks)
    
            return unsubscribe;
        }, [navigation]);
    */
    return <>
        <Text style={{ fontSize: 48 }}>TrackListScreen</Text>

    </>
}

const styles = StyleSheet.create({})

export default TrackListScreen