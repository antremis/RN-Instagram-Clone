import React from "react"
import {useUserContext} from "../context/UserContextProvider"
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native"

const Stories = () => {

    const {users} = useUserContext()

    return (
        <View style = {styles.Stories}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {users.map((user, index) =>
                    (<View style = {styles.Story} key = {index}>
                        <TouchableOpacity activeOpacity={0.8}><Image style = {styles.StoryImage} source = {{uri : user.image}} /></TouchableOpacity>
                        <Text style = {styles.StoryUser} >{user.name.length >= 9 ? user.name.slice(0, 6) + "..." : user.name}</Text>               
                    </View>)
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Stories : {
        paddingHorizontal : 10,
        borderBottomColor : "#333",
        paddingBottom : 10,
        borderBottomWidth : 0.2,
    },
    Story : {
        alignItems : "center",
        justifyContent : "center",
        marginRight : 10,
    },
    StoryImage : {
        width : 60,
        height : 60,
        borderRadius : 100,
        borderWidth : 2,
        borderColor : "#FF8501",
    },
    StoryUser : {
        color : "#FFF",
        fontSize : 11,
    }
})

export default Stories