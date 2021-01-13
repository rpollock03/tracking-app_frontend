import React, { useState } from "react"

const LocationContext = React.createContext()

export const LocationProvider = ({ children }) => {

    //toggle recording flag 
    const [isRecording, setIsRecording] = useState(false)

    const startRecording = () => { setIsRecording(true) }

    const stopRecording = () => { setIsRecording(false) }

    //set/store list of location updates
    const [locations, setLocations] = useState([])
    const [currentLocation, setCurrentLocation] = useState(null)

    const addLocation = (newLocation, recording) => {
        //update current location on map
        setCurrentLocation(newLocation)
        //only store list of locations if recording

        if (recording) {
            setLocations(locations => [...locations, newLocation])
        }
    }

    // Track management 
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")

    const changeName = (newName) => {
        setName(newName)
    }

    const changeCategory = (newCategory) => {
        setCategory(newCategory)
    }

    const reset = () => {
        setName("")
        setLocations([])
        setCategory("")
    }


    //children being App component, ie all components
    return <LocationContext.Provider value={{ startRecording, stopRecording, addLocation, changeName, reset, changeCategory, category, locations, currentLocation, name, isRecording, }}>
        {children}
    </LocationContext.Provider>

}

export default LocationContext