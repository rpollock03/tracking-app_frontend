import React, { useState } from "react"
import trackerApi from "../api/tracker"


const TrackContext = React.createContext()


export const TrackProvider = ({ children }) => {

    const [tracks, setTracks] = useState([])

    const fetchTracks = async () => {
        const response = await trackerApi.get("/tracks")
        setTracks(response.data)
    }

    const createTrack = async (name, locations, category, startingLocation) => {
        console.log("Saving: ", name, " - ", locations.length, " location points")
        await trackerApi.post("/tracks", { name, locations, category, startingLocation })
    }

    //children being App component, ie all components
    return <TrackContext.Provider value={{ fetchTracks, tracks, createTrack }}>
        {children}
    </TrackContext.Provider>
}

export default TrackContext