import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from "react-native"
import Spacer from "../components/Spacer"

import AuthContext from "../context/AuthContext"


const AccountScreen = () => {

    const { signout } = useContext(AuthContext)
    return <SafeAreaView >
        <Text h1 style={{ textAlign: "center" }}>Options</Text>
        <Spacer>
            <Button title="Sign Out" onPress={signout} />
        </Spacer>
    </SafeAreaView>
}

const styles = StyleSheet.create({})

export default AccountScreen