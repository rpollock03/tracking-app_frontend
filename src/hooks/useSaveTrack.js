import { useContext } from "react"
import TrackContext from "../context/TrackContext"
import LocationContext from "../context/LocationContext"

import * as RootNavigation from '../RootNavigation'


export default () => {

    const { createTrack } = useContext(TrackContext)
    const { locations, name, reset } = useContext(LocationContext)

    const saveTrack = async () => {
        await createTrack(name, locations)
        reset()
        RootNavigation.navigate('TrackListScreen')
    }

    return [saveTrack]
}