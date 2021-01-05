import React, { useState } from "react"

const LocationContext = React.createContext()



export const LocationProvider = ({ children }) => {

    //state
    const [isRecording, setIsRecording] = useState(false)
    const [locations, setLocations] = useState([])
    const [currentLocation, setCurrentLocation] = useState(null)
    const [name, setName] = useState("")

    const startRecording = () => { setIsRecording(true) }

    const stopRecording = () => { setIsRecording(false) }

    const addLocation = (location, recording) => {
        setCurrentLocation(location)
        if (recording) {
            setLocations([...locations, location])
        }
    }

    const changeName = (newName) => {
        setName(newName)
    }


    //children being App component, ie all components
    return <LocationContext.Provider value={{ startRecording, stopRecording, addLocation, changeName, locations, currentLocation, name, isRecording, }}>
        {children}
    </LocationContext.Provider>

}

export default LocationContext