import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

export default props =>{
    const StyleCard = StyleSheet.create(
        {
            CityButton:{
                width: "100%",
                borderBottomWidth: 3,
                borderBottomColor: "#1975D2",
                paddingVertical: 10,
                paddingHorizontal: 10
            },
            CityTitle:{
                fontSize: 20,
                fontWeight: "bold"
            },
            CountryTitle:{
                fontSize: 12
            }
        }
    )
    return(
        <Pressable onPress={props.cityRoute} style={StyleCard.CityButton}>
            <Text style={StyleCard.CityTitle}>{props.cityText}</Text>
            <Text style={StyleCard.CountryTitle}>{props.countryText}</Text>
        </Pressable>
    )

}