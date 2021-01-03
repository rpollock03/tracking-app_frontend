import { useState, useEffect } from "react"
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location"


export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null)

    //subscriber option is how we stop watching
    const [subscriber, setSubscriber] = useState(null)

    const startWatching = async () => {
        try {
            await requestPermissionsAsync()

            // tracks user position over time
            const sub = await watchPositionAsync({
                //more accuracy uses more battery!
                accuracy: Accuracy.BestForNavigation,
                // update either ever 10m or 1 second
                timeInterval: 1000,
                distanceInterval: 10
            }, callback
            )
            setSubscriber(sub)
        }
        catch (e) {
            setErr(e)
        }
    }

    //anytime shouldTrack changes do something - either start tracking or stop tracking. ShouldTrack is the isFocused booleon. Only tracking user when on that page. 
    useEffect(() => {
        if (shouldTrack) {
            startWatching()
        }
        else {
            subscriber.remove()
            setSubscriber(null)
        }
    }, [shouldTrack])

    // hooks convention is to return array of values
    return [err]
}