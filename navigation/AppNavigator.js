import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React from "react"
import AddPost from '../screens/AddPost';
import Chat from '../screens/Chat';
import Likes from '../screens/Likes';
import Profile from '../screens/Profile';
import Reels from '../screens/Reels';
import Search from '../screens/Search';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {{headerShown : false}}>
            <Stack.Screen name = "Home" component = {Home}/> 
            <Stack.Screen name = "AddPost" component = {AddPost}/> 
            <Stack.Screen name = "Chat" component = {Chat}/>
            <Stack.Screen name = "Likes" component = {Likes}/>
            <Stack.Screen name = "Profile" component = {Profile}/>
            <Stack.Screen name = "Reels" component = {Reels}/>
            <Stack.Screen name = "Search" component = {Search}/>
        </Stack.Navigator>
    )
}

export default AppNavigator