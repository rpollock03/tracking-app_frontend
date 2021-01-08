import React, { useContext } from "react"
import { Input, Button } from "react-native-elements"
import Spacer from "./Spacer"

import useSaveTrack from "../hooks/useSaveTrack"

import LocationContext from "../context/LocationContext"


const TrackForm = () => {

    const { startRecording, stopRecording, changeName, name, isRecording, locations } = useContext(LocationContext)

    const [saveTrack] = useSaveTrack()

    return <>
        <Spacer>
            <Input
                placeholder="Enter name"
                onChangeText={changeName}
                value={name}
            />
        </Spacer>

        <Spacer>
            {!isRecording ? <Button title="Start Recording" onPress={startRecording} />
                : <Button title="Stop Recording" onPress={stopRecording} />}
        </Spacer>
        <Spacer>
            {!isRecording && locations.length ? <Button title="Save Recording" onPress={saveTrack} /> : null}
        </Spacer>



    </>
}


export default TrackForm