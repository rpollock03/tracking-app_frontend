import React, { useContext } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "react-native-elements"
import Spacer from "../components/Spacer"
import AuthForm from "../components/AuthForm"

import AuthContext from "../context/AuthContext"

const SignupScreen = ({ navigation }) => {

    const { signup, errorMessage, clearErrors } = useContext(AuthContext)

    React.useEffect(
        () => navigation.addListener('blur', () => clearErrors()),
        []
    );

    return <View style={styles.container}>
        <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={errorMessage}
            onSubmit={signup}
            submitButtonText="Sign Up"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}><Spacer><Text style={styles.link}>Already have an account? Sign in instead</Text></Spacer></TouchableOpacity>
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
    },
    link: {
        color: "blue",
        textAlign: "center"
    }
})

export default SignupScreen