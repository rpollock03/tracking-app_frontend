import React, { useContext } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "react-native-elements"
import AuthForm from "../components/AuthForm"
import Spacer from "../components/Spacer"
import AuthContext from "../context/AuthContext"

const SigninScreen = ({ navigation }) => {

    const { signin, errorMessage, clearErrors, tryLocalSignIn } = useContext(AuthContext)

    React.useEffect(
        () => navigation.addListener('blur', () => clearErrors()),
        []
    );

    React.useEffect(() => {
        tryLocalSignIn()
    }, [])

    return <View style={styles.container}>
        <AuthForm
            headerText="Sign In to your Tracker Account"
            errorMessage={errorMessage}
            onSubmit={signin}
            submitButtonText="Sign In"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Spacer><Text style={styles.link}>Don't have an account? Sign up instead</Text></Spacer></TouchableOpacity>
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

export default SigninScreen