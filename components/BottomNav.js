import React, {useState} from 'react'
import { View, TouchableOpacity, Image } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

const BottomNav = () => {

    const navigation = useNavigation()
    const [active, setActive] = useState("Home")

    const handleIconClicked = (Icon) => {
        setActive(Icon)
        navigation.replace(Icon)
    }

    return (
        <View style = {{flexDirection : "row", width : "100%", paddingHorizontal : 20, justifyContent:"space-between", borderTopColor : "#333", borderTopWidth : 0.2}}>
            <TouchableOpacity onPress={()=>{handleIconClicked("Home")}} activeOpacity={0.8} style = {{height : "100%", paddingVertical : 10,  paddingHorizontal : 15}}><Ionicons name = {active == "Home" ? "home-sharp" : "home-outline"} size = {24} color = "white" /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleIconClicked("Search")}} activeOpacity={0.8} style = {{height : "100%", paddingVertical : 10,  paddingHorizontal : 15}}><Ionicons name = {active == "Search" ? "search-sharp" : "search-outline"} size = {24} color = "white" /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleIconClicked("Reels")}} activeOpacity={0.8} style = {{height : "100%", paddingVertical : 10,  paddingHorizontal : 15}}><Ionicons name = {active == "Reels" ? "tv-sharp" : "tv-outline"} size = {24} color = "white" /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleIconClicked("Likes")}} activeOpacity={0.8} style = {{height : "100%", paddingVertical : 10,  paddingHorizontal : 15}}><Ionicons name = {active == "Likes" ? "heart-sharp" : "heart-outline"} size = {24} color = "white" /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleIconClicked("Profile")}} activeOpacity={0.8} style = {{height : "100%", paddingVertical : 10,  paddingHorizontal : 15}}><Image style = {{width : 24, height : 24, borderRadius : 30}} source = {{uri : "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/59475072_401165673812171_6271609677679689728_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AKiCdiFuyGsAX8z_wl-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT81KvSMvs_T-HKLh_DTmwRTRw1qGSXgg3dYhK1NkbuocA&oe=620B6EC9&_nc_sid=7bff83"}}/></TouchableOpacity>
        </View>

    )
}

export default BottomNav