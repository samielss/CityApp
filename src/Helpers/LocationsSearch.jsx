import React from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

export default props => {
    const LocationInsert = StyleSheet.create(
        {
            Input:{
                width:"100%",
                paddingVertical: 11,
                paddingHorizontal: 8,
                backgroundColor: "#1975D2",
                marginVertical: 1
            },
            LocationButton:{
                width: "100%",
                paddingVertical: 15,
                paddingHorizontal: 8,
                backgroundColor: "#1975D2",
                marginVertical: 1
            }
        }
    )

    return(
    <View style={{position: "absolute", bottom: 0, width: "100%"}}>
        <TextInput placeholder="Location name" label="Location name" placeholderTextColor={"#FFF"} style={LocationInsert.Input}/>
        <TextInput placeholder="Location info" label="Location info" placeholderTextColor={"#FFF"} style={LocationInsert.Input}/>
        <Pressable onPress={props.LocationsInsert} style={LocationInsert.LocationButton}>
            <Text style={{textAlign: "center", color: "#FFF"}}>Add Location</Text>
        </Pressable>
    </View>
    )
}