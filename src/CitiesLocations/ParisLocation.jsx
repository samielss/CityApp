import React from "react";
import { View, Text } from "react-native";
import LocationsSearch from "../Helpers/LocationsSearch";

export default props => {
    return (
        <View>
            <Text>No locations for this city!</Text>
            <LocationsSearch LocationsInsert={props.InsertLocations}/>
        </View>
    )
}