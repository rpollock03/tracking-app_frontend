import React, { useContext } from "react"
import { StyleSheet, Text } from "react-native"
import { Button } from 'react-native-elements'
import { SafeAreaView } from "react-native"
import Spacer from "../components/Spacer"

import AuthContext from "../context/AuthContext"


const AccountScreen = () => {

    const { signout } = useContext(AuthContext)
    return <SafeAreaView >
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Spacer>
            <Button title="Sign Out" onPress={signout} />
        </Spacer>
    </SafeAreaView>
}

const styles = StyleSheet.create({})

export default AccountScreen