import React, { useState } from "react"



const TrackContext = React.createContext()


export const TrackProvider = ({ children }) => {

    const fetchTracks = () => { }
    const createTrack = () => { }

    //children being App component, ie all components
    return <TrackContext.Provider value={{ fetchTracks, createTrack }}>
        {children}
    </TrackContext.Provider>
}

export default TrackContext