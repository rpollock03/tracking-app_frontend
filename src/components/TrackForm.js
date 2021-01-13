import React, { useContext, useState } from "react"
import { Input, Button, ButtonGroup } from "react-native-elements"
import Spacer from "./Spacer"

import { StyleSheet, View } from "react-native"

import useSaveTrack from "../hooks/useSaveTrack"

import LocationContext from "../context/LocationContext"
import { Entypo } from '@expo/vector-icons';

const TrackForm = () => {

    const { startRecording, stopRecording, changeName, name, changeCategory, category, reset, isRecording, locations } = useContext(LocationContext)

    const [saveTrack] = useSaveTrack()

    const buttons = ["Walk", "Run", "Cycle", "Drive"]
    const [selectedMethod, setSelectedMethod] = useState(null)

    function updateIndex(index) {
        setSelectedMethod(index)
        changeCategory(buttons[index])
    }
    return <>
        <Spacer>
            <Input
                placeholder="Enter name"
                onChangeText={changeName}
                value={name}
            />
            <ButtonGroup
                onPress={updateIndex}
                selectedIndex={selectedMethod}
                buttons={buttons}
                containerStyle={{ height: 50, borderRadius: 30 }}

            />

        </Spacer>




        <Spacer>
            {!isRecording ? <Button title=" Start Recording" onPress={startRecording} icon={<Entypo name="controller-record" color="white" size={24} />} />
                : <Button title=" Stop Recording" buttonStyle={{
                    backgroundColor: "red"
                }} icon={<Entypo name="controller-stop" size={24} color="white" />} onPress={stopRecording} />}
        </Spacer>
        <Spacer>
            {!isRecording && locations.length ?
                <View style={styles.buttonRow}>
                    <Button title=" Save" buttonStyle={{
                        width: 170
                    }} onPress={saveTrack} icon={<Entypo name="save" size={24} color="white" />} />
                    <Button title=" Clear" buttonStyle={{
                        backgroundColor: "red", width: 170
                    }} onPress={reset} icon={<Entypo name="cross" size={24} color="white" />} />
                </View>

                : null}
        </Spacer>



    </>
}

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

export default TrackForm