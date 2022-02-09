import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Ionicons} from "@expo/vector-icons"

const BottomNav = () => {
    return (
        <View style = {{flexDirection : "row", width : "100%", paddingHorizontal : 20, paddingVertical : 10, justifyContent : "space-between", borderTopColor : "#333", borderTopWidth : 0.2}}>
            <Ionicons name = "home-outline" size = {24} color = "white"/>
            <Ionicons name = "search-outline" size = {24} color = "white"/>
            <Ionicons name = "tv-outline" size = {24} color = "white"/>
            <Ionicons name = "heart-outline" size = {24} color = "white"/>
            <Image style = {{width : 24, height : 24, borderRadius : 30}} source = {{uri : "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/59475072_401165673812171_6271609677679689728_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AKiCdiFuyGsAX8z_wl-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT81KvSMvs_T-HKLh_DTmwRTRw1qGSXgg3dYhK1NkbuocA&oe=620B6EC9&_nc_sid=7bff83"}}/>
        </View>

    )
}

export default BottomNav