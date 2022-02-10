import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import Logo from "../assets/header-logo.png"

const Header = () => {
    return (
        <View style = {styles.Header}>
            <TouchableOpacity activeOpacity={0.8}><Image source = {Logo} style = {styles.Logo} /></TouchableOpacity>
            <View style = {styles.HeaderIcons}>
                <TouchableOpacity activeOpacity={0.8}><Image source = {{uri : "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png"}} style = {styles.HeaderIcon}/></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style = {styles.Badge}><Text style = {styles.BadgeText}>69</Text></View>
                    <Image source = {{uri : "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png"}} style = {styles.HeaderIcon}/>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Header : {
        height : 60,
        flexDirection : "row",
        paddingHorizontal : 20,
        justifyContent : "space-between",
        alignItems : "center",
    },
    Logo : {
        width : 100,
        height : 50,
        resizeMode : "contain",
    },
    HeaderIcons : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        width : 70,
    },
    HeaderIcon : {
        width : 30,
        height : 30,
        resizeMode : "contain",
    },
    Badge : {
        position : "absolute",
        display : "flex",
        top : -5,
        right : -5,
        backgroundColor : "#FF3250",
        width : 20,
        height : 20,
        borderRadius : 25,
        justifyContent : "flex-start",
        zIndex : 1,
    },
    BadgeText : {
        color : "#FFF",
        fontWeight : "bold",
        textAlign : "center",
    }
})

export default Header