import { useContext } from "react"
import TrackContext from "../context/TrackContext"
import LocationContext from "../context/LocationContext"

import * as RootNavigation from '../RootNavigation'
const GEOCODE_KEY = "pk.2519660cd5025934433bffdaa2cf8eb4"




//process.env.REACT_APP_GEOCODE_API_KEY

export default () => {


    const { createTrack } = useContext(TrackContext)
    const { locations, name, category, reset } = useContext(LocationContext)

    const saveTrack = async () => {
        let lat = locations[0].coords.latitude
        let lon = locations[0].coords.longitude
        let response = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=${GEOCODE_KEY}&lat=${lat}&lon=${lon}&normalizeaddress=1&format=json`)

        let data = await response.json()

        let startingLocation = data.address.city
        await createTrack(name, locations, category, startingLocation)
        reset()
        RootNavigation.navigate('TrackListScreen')
    }

    return [saveTrack]
}

