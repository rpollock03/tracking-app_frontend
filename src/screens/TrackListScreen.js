import React, { useContext, useEffect } from "react"
import { StyleSheet, Button, FlatList, TouchableOpacity, SafeAreaView } from "react-native"
import TrackContext from "../context/TrackContext"
import { ListItem, Avatar, Text } from "react-native-elements"
import { FontAwesome5 } from '@expo/vector-icons';

const TrackListScreen = ({ navigation }) => {

    const { tracks, fetchTracks } = useContext(TrackContext)

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchTracks()
        });

        return unsubscribe;
    }, [navigation]);

    return <SafeAreaView>
        <Text h1 style={{ textAlign: "center" }}>My Tracks</Text>
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
                                <FontAwesome5 name="hiking" size={24} color="black" />
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

    </SafeAreaView>
}

const styles = StyleSheet.create({


})

export default TrackListScreen