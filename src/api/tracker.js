import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'


const instance = axios.create({
    baseURL: "http://05fd44a5f2b4.ngrok.io"
})

// add auth token to every axios request
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    // if error
    (err) => {
        return Promise.reject(err)
    }
)

export default instance