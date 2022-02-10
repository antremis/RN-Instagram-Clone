import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screens/Home"
import React from "react"
import Login from '../screens/Login';
import Landing from './../screens/Landing';

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {{headerShown : false}}>
            <Stack.Screen name = "Landing" component = {Landing}/>
            <Stack.Screen name = "Login" component = {Login}/>
        </Stack.Navigator>
    )
}

export default RootNavigator