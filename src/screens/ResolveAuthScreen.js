import React, { useEffect, useContext } from "react"
import AuthContext from "../context/AuthContext"

const ResolveAuthScreen = () => {

    const { tryLocalSignIn } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignIn()
    }, [])

    return null
}


export default ResolveAuthScreen