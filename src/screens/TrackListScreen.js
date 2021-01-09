import React, { useContext, useEffect } from "react"
import { StyleSheet, Text, Button, FlatList, TouchableOpacity } from "react-native"
import TrackContext from "../context/TrackContext"
import { ListItem, Avatar } from "react-native-elements"


const TrackListScreen = ({ navigation }) => {

    const { tracks, fetchTracks } = useContext(TrackContext)

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchTracks()
        });

        return unsubscribe;
    }, [navigation]);

    return <>
        <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
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
                                <Avatar />
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                    <ListItem.Subtitle>Something</ListItem.Subtitle>
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