import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
    baseURL: "http://94a46c1473f4.ngrok.io"
})

// add auth token to every axios request
instance.interceptors.request.use(
    //first argument - function called everytime we make request
    async (config) => {
        const token = await AsyncStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    //second argument - function called everytime there is an error
    (err) => {
        return Promise.reject(err)
    }
)

export default instance