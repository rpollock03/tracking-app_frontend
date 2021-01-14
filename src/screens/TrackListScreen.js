import React, { useContext, useEffect } from "react"
import { StyleSheet, Button, FlatList, TouchableOpacity, SafeAreaView } from "react-native"
import TrackContext from "../context/TrackContext"
import { ListItem, Avatar, Text, Header } from "react-native-elements"
import { FontAwesome5 } from '@expo/vector-icons';

const TrackListScreen = ({ navigation }) => {

    const { tracks, fetchTracks } = useContext(TrackContext)

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchTracks()
        });

        return unsubscribe;
    }, [navigation]);


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


    function getIcon(category) {
        if (category == "Behdhdhsd") icon = "car-alt"
        else icon = "hiking"
        return icon
    }


    return <>
        <Header
            centerComponent={{ text: 'My tracks', style: { fontSize: 30, color: '#fff' } }}
        />

        {tracks.length ? (<>
            <FlatList
                keyExtractor={item => item._id}
                data={tracks}
                renderItem={({ item }) => {
                    return <>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("TrackDetail", { _id: item._id })
                        }}>
                            <ListItem bottomDivider>
                                <FontAwesome5 name={getIcon(item.category)} size={24} color="black" />
                                <ListItem.Content >
                                    <ListItem.Title style={{ fontWeight: "bold" }}>{item.name}</ListItem.Title>
                                    <ListItem.Subtitle><FontAwesome5 name="clock" color="black" /> {getDate(item.locations[0].timestamp)}</ListItem.Subtitle>
                                    <ListItem.Subtitle><FontAwesome5 name="location-arrow" color="black" /> {item.startingLocation}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    </>

                }}

                extraData={tracks}
            />
        </>) : null}

    </>
}

const styles = StyleSheet.create({


})

export default TrackListScreen