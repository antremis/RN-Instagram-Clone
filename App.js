import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import StackNavigator from './navigation/StackNavigator';
import UserContextProvider from "./context/UserContextProvider"
import PostContextProvider from "./context/PostContextProvider"

export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <PostContextProvider>
          <StackNavigator />
        </PostContextProvider>
      </UserContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});