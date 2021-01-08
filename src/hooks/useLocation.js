import { useState, useEffect } from "react"
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location"

//shouldTrack is eg isFocused boolean whether user is on trackcreatescreen
export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null)

    //anytime shouldTrack changes do something - either start tracking or stop tracking. ShouldTrack is the isFocused booleon. Only tracking user when on that page. callback is to stop continually calling startwatching as useeffect would
    useEffect(() => {
        let subscriber
        const startWatching = async () => {
            try {
                await requestPermissionsAsync()
                // tracks user position over time
                subscriber = await watchPositionAsync({
                    //more accuracy uses more battery!
                    accuracy: Accuracy.BestForNavigation,
                    // update either ever 10m or 1 second
                    timeInterval: 1000,
                    distanceInterval: 10
                }, callback)
            }
            catch (e) {
                setErr(e)
            }
        }

        if (shouldTrack) {
            startWatching()
        }
        else {
            if (subscriber) {
                subscriber.remove()
            }
            subscriber = null
        }

        //When useeffect starts some process, we can return a cleanup function so that if dependencies change, that function which was started is stopped/handled
        return () => {
            if (subscriber) {
                //stops listening for updates to user location
                subscriber.remove()
            }
        }
        // function above runs whenever callback changes. Callback changes whenever isRecording changes.
    }, [shouldTrack, callback])

    // hooks convention is to return array of values
    return [err]
}