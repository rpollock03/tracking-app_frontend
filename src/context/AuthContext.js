import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from "react"
import trackerApi from "../api/tracker"

import * as RootNavigation from '../RootNavigation'

const AuthContext = React.createContext()

// named export, because default from this file is AuthContext. Named export means we need to use curly braces when importing
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null) //using instead of isSignedIn. Presence of token, is signed in.
    const [errorMessage, setErrorMessage] = useState("")

    const signup = async ({ email, password }) => {
        try {
            //should return our JSON Web Token JWT
            const response = await trackerApi.post("/signup", { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            setToken(response.data.token)
            RootNavigation.navigate('MainFlow')
        } catch (err) {
            setErrorMessage("Something went wrong with sign up")
            console.log(err)
        }
    }

    const signin = async ({ email, password }) => {
        try {
            //should return our JSON Web Token JWT
            const response = await trackerApi.post("/signin", { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            setToken(response.data.token)
            RootNavigation.navigate('MainFlow')
        } catch (err) {
            setErrorMessage("Something went wrong with sign in")
            console.log(err)
        }
    }

    const clearErrors = () => {
        setErrorMessage("")
    }

    const tryLocalSignIn = async () => {
        const storedToken = await AsyncStorage.getItem('token')
        if (storedToken) {
            setToken(storedToken)
            RootNavigation.navigate('MainFlow')
        } else {
            RootNavigation.navigate('Signin')
        }
    }

    const signout = async () => {
        await AsyncStorage.removeItem("token")
        setToken(null)
        RootNavigation.navigate("Signin")
    }

    //children being App component, ie all components
    return <AuthContext.Provider value={{ token, signup, signin, signout, errorMessage, clearErrors, tryLocalSignIn }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext