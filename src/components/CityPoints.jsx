import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import LocationCard from "../Helpers/LocationCard";
import LocationsSearch from "../Helpers/LocationsSearch";

export default props => {
    return(
        <View style={{flex: 1}}>
            <LocationCard locationText="Sushi Sora" descriptionText="Good Sushi"/>
            <LocationCard locationText="Mt Fuji" descriptionText="Great sightseeing"/>
            <LocationCard locationText="Driver City Tokyo Plaza" descriptionText="Shooping"/>
            <LocationCard locationText="National Yoyogi Stadium" descriptionText="Nice Stadium"/>
            <LocationsSearch LocationsInsert={() => props.navigation.navigate('CityPoints')}/>
        </View>
    )
}