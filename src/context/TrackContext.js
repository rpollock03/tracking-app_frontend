import React, { useState } from "react"
import trackerApi from "../api/tracker"


const TrackContext = React.createContext()


export const TrackProvider = ({ children }) => {

    const [tracks, setTracks] = useState([])

    const fetchTracks = async () => {
        const response = await trackerApi.get("/tracks")
        setTracks(response)
    }

    const createTrack = async (name, locations) => {
        await trackerApi.post("/tracks", { name, locations })
    }

    //children being App component, ie all components
    return <TrackContext.Provider value={{ fetchTracks, tracks, createTrack }}>
        {children}
    </TrackContext.Provider>
}

export default TrackContext