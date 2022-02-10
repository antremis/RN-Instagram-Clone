import React from "react"
import { View, StyleSheet} from "react-native"
import Header from "../components/Header"
import BottomNav from "../components/BottomNav"
import AppNavigator from './../navigation/AppNavigator';
import Home from './Home';

const Landing = () => {

    return(
        <View style = {styles.container}>
            <Header />
            <AppNavigator />
            <BottomNav />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#000",
        marginTop : 25,
    }
})

export default Landing