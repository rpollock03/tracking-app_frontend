import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import { Button, Text, Header } from 'react-native-elements'
import { View } from "react-native"
import Spacer from "../components/Spacer"
import AuthContext from "../context/AuthContext"


const AccountScreen = () => {

    const { signout } = useContext(AuthContext)

    return <>
        <Header
            centerComponent={{ text: 'My Account', style: { fontSize: 30, color: '#fff' } }}
        />
        <View style={styles.container}>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
            <Spacer>
                <Button title="Change Password" onPress={console.log("something")} />
            </Spacer>
            <Spacer>
                <Button title="Delete Account" buttonStyle={{
                    backgroundColor: "red"
                }} onPress={console.log("something")} />
            </Spacer>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
    }
})

export default AccountScreen