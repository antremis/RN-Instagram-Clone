import React from "react"
import { Text, View, StyleSheet, ScrollView} from "react-native"
import Stories from "../components/Stories"
import Post from "../components/Post"
import {usePostContext} from "../context/PostContextProvider"

const Home = () => {

    const {posts} = usePostContext()

    return(
        <View style = {{backgroundColor : "#000"}}>
            <ScrollView>
                <Stories />
                <View style = {{flex : 1}}>
                    {posts.map((post, index) => (
                        <Post key = {index} post = {post} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default Home