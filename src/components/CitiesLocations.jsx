import React from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import ParisLocation from "../CitiesLocations/ParisLocation";
import LocationsSearch from "../Helpers/LocationsSearch";

export default props => {

    const StyleWarning = StyleSheet.create(
        {
            Warning:{
                fontSize: 18,
                textAlign: "center",
                fontWeight: "bold",
                width: "100%",
                padding: 4,
                borderBottomWidth: 2,
                borderBottomColor: "#1975D2"
            }
        }
    )

    return (
        <View style={{flex: 1, justifyContent: "center"}}>
            <Text style={StyleWarning.Warning}>No locations for this city!</Text>
            <LocationsSearch LocationsInsert={() => props.navigation.navigate('CityPoints')}/>
        </View>
    )
}