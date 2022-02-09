import React from "react"
import {View, StyleSheet, ScrollView} from "react-native"
import Header from "../components/Header"
import Stories from "../components/Stories"
import Post from "../components/Post"
import BottomNav from "../components/BottomNav"

const Home = () => {
    return(
        <View style = {styles.container}>
            <Header />
            <ScrollView>
                <Stories />
                <Post />
            </ScrollView>
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

export default Home