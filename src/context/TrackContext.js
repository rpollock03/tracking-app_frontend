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
        await trackerApi.post("/tracks", { name, locations, category, startingLocation })
    }

    const deleteTrack = async (id) => {
        await trackerApi.delete("/tracks", { data: { id } })

    }

    //children being App component, ie all components
    return <TrackContext.Provider value={{ fetchTracks, tracks, createTrack, deleteTrack }}>
        {children}
    </TrackContext.Provider>
}

export default TrackContext