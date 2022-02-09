import React from "react"
import {Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import {usePostContext} from "../context/PostContextProvider"
import { Ionicons } from '@expo/vector-icons';

const Post = () => {
    const {posts} = usePostContext()
    
    return (
        <View style = {styles.Container}>
            {posts.map((post, index) => (
                <View key = {index} style = {styles.Post}>
                    <View style = {styles.PostHeader}>
                        <TouchableOpacity style = {styles.PostHeaderUser} activeOpacity = {0.8}>
                            <Image source = {{uri : post.user.image}} style = {styles.PostHeaderImage} />
                            <Text style = {styles.PostHeaderText}>{post.user.name}</Text>
                        </TouchableOpacity>
                        <Text style = {styles.PostHeaderText}>...</Text>
                    </View>
                    <Image source = {{uri : post.imgurl}} style = {styles.PostImage}/>
                    <View style = {styles.PostHeader}>
                        <View style = {styles.PostHeaderUser}>
                            <TouchableOpacity activeOpacity = {0.8}><Ionicons style = {styles.PostButtonIcon} name="heart-outline"/></TouchableOpacity>
                            <TouchableOpacity activeOpacity = {0.8}><Ionicons style = {styles.PostButtonIcon} name="chatbubble-outline"/></TouchableOpacity>
                            <TouchableOpacity activeOpacity = {0.8}><Ionicons style = {[styles.PostButtonIcon, {transform:[{rotate:"-30deg"}], marginTop : -5}]} name="send-outline"/></TouchableOpacity>
                        </View>
                        <TouchableOpacity activeOpacity = {0.8}><Ionicons style = {styles.PostButtonIcon} name="bookmark-outline"/></TouchableOpacity>
                    </View>
                    <View style = {{paddingHorizontal : 10}}>
                        <Text style = {{color : "#FFF", fontWeight : "bold"}}>{post.likes} Likes</Text>
                        <Text style = {{color : "#FFF"}}><Text style = {{fontWeight : "bold"}}>{post.user.name}</Text> {post.caption}</Text>
                        {post.comments.length == 1 && <TouchableOpacity activeOpacity={0.8}><Text style = {{color : "grey"}}>View 1 Comment</Text></TouchableOpacity>}
                        {post.comments.length > 1 && <TouchableOpacity activeOpacity={0.8}><Text style = {{color : "grey"}}>View all {post.comments.length} comments</Text></TouchableOpacity>}
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    Container : {
        flex : 1,
    },
    Post : {
        marginVertical : 15,
    },
    PostHeader : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        paddingHorizontal : 10,
        paddingVertical : 5,
    },  
    PostHeaderUser : {
        flexDirection : "row",
        alignItems : "center",
    },
    PostHeaderImage : {
        width : 30,
        height : 30,
        borderRadius : 25,
        marginRight : 8,
    },
    PostHeaderText : {
        color : "#FFF",
        fontWeight : "700"
    },
    PostImage : {
        width : "100%",
        height : 355,
        // height : "100%",
    },
    PostButtonIcon : {
        fontSize : 30,
        color : "#FFF",
        marginHorizontal : 2
    },
    PostComments : {

    }
})

export default Post