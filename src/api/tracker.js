import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
    baseURL: "http://dcb313ae7d5c.ngrok.io"
})
/*
instance.interceptors.request.use(
    //called everytime we make request
    async (config) => {
        const token = await AsyncStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    //called everytime there is an error
    (err) => {
        return Promise.reject(err)
    }
)
*/
export default instance