import React, { useState } from "react"

const LocationContext = React.createContext()



export const LocationProvider = ({ children }) => {

    //state
    const [isRecording, setIsRecording] = useState(false)
    const [locations, setLocations] = useState([])
    const [currentLocation, setCurrentLocation] = useState(null)

    const startRecording = () => { }


    const stopRecording = () => { }


    const addLocation = (location) => {
        setCurrentLocation(location)
    }




    //children being App component, ie all components
    return <LocationContext.Provider value={{ startRecording, stopRecording, addLocation, currentLocation }}>
        {children}
    </LocationContext.Provider>

}

export default LocationContext