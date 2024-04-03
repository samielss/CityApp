import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import Cities from "./components/Cities";
import CitiesLocations from "./components/CitiesLocations";
import CityPoints from "./components/CityPoints";

export default props => {

    const Stack = createNativeStackNavigator()

    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Cities" component={Cities} options={{headerTitleAlign: "center", headerStyle:{backgroundColor: "#1975D2"}, headerTintColor: "#FFF"}}/>
                    <Stack.Screen name="CitiesLocations" component={CitiesLocations} options={{headerTitleAlign: "center", headerStyle:{backgroundColor: "#1975D2"}, headerTintColor: "#FFF", title: "Tokyo"}}/>
                    <Stack.Screen name="CityPoints" component={CityPoints} options={{headerTitleAlign: "center", headerStyle:{backgroundColor: "#1975D2"}, headerTintColor: "#FFF", title: "Tokyo"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}