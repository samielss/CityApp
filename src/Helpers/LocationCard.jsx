import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

export default props =>{
    const LocationCard = StyleSheet.create(
        {
            LocationButton:{
                width: "100%",
                borderBottomWidth: 3,
                borderBottomColor: "#1975D2",
                paddingVertical: 10,
                paddingHorizontal: 10
            },
            LocationTitle:{
                fontSize: 20,
                fontWeight: "bold"
            },
            DescriptonTitle:{
                fontSize: 12
            }
        }
    )
    
    return(
        <Pressable onPress={props.cityRoute} style={LocationCard.LocationButton}>
            <Text  style={LocationCard.LocationTitle}>{props.locationText}</Text>
            <Text style={LocationCard.DescriptonTitle}>{props.descriptionText}</Text>
        </Pressable>
    )
}