import React, { useState } from "react"
import {Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import Comment from './Comment';

const Post = ({post}) => {
    
    const [liked, setLiked] = useState(false)
    const [expanded, setExpanded] = useState(false)

    return (
        <View style = {styles.Post}>
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
                    <TouchableOpacity activeOpacity = {0.8} onPress = {() => setLiked(!liked)}><Ionicons style = {styles.PostButtonIcon} name={liked ? "heart" : "heart-outline"} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity = {0.8}><Ionicons style = {styles.PostButtonIcon} name="chatbubble-outline"/></TouchableOpacity>
                    <TouchableOpacity activeOpacity = {0.8}><Ionicons style = {[styles.PostButtonIcon, {transform:[{rotate:"-30deg"}], marginTop : -5}]} name="send-outline"/></TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity = {0.8}><Ionicons style = {styles.PostButtonIcon} name="bookmark-outline"/></TouchableOpacity>
            </View>
            <View style = {{paddingHorizontal : 10}}>
                <Text style = {{color : "#FFF", fontWeight : "bold"}}>{post.likes} Likes</Text>
                <Text style = {{color : "#FFF"}}><Text style = {{fontWeight : "bold"}}>{post.user.name}</Text> {post.caption}</Text>
                { expanded && 
                    post.comments.map((comment, index) => (
                        <Comment key = {index} comment = {comment} />
                    ))
                }
                {!expanded && post.comments.length == 1 && <TouchableOpacity activeOpacity={0.8} onPress = {() => {setExpanded(true)}}><Text style = {{color : "grey"}}>View 1 Comment</Text></TouchableOpacity>}
                {!expanded && post.comments.length > 1 && <TouchableOpacity activeOpacity={0.8} onPress = {() => {setExpanded(true)}}><Text style = {{color : "grey"}}>View all {post.comments.length} comments</Text></TouchableOpacity>}
                {expanded && <TouchableOpacity activeOpacity={0.8}  onPress = {() => {setExpanded(false)}}><Text style = {{color : "grey"}}>Show less</Text></TouchableOpacity>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container : {
        flex : 1,
    },
    Post : {
        marginVertical : 10,
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
        height : 370,
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