import * as Location from "expo-location"


const tenMetersWithDegrees = 0.0001

const getLocation = increment => {

    return {
        timestamp: 100000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitutde: 5,
            longitude: -5.6370179098644195 + increment * tenMetersWithDegrees,
            latitude: 54.6643407816772 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0

//run every second
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged", {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)