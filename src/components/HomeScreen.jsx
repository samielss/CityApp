import React from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

export default props => {
    const StyleHome = StyleSheet.create(
        {
            Background:{
                backgroundColor: "#1975D2",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10
            },
            Cities:{
                fontSize: 35,
                color: "#FFF",
                marginVertical: 7
            },
            InputCity:{
                backgroundColor: "#FFF",
                width: "100%",
                paddingVertical: 10,
                marginVertical: 10
            },
            ButtonAdd:{
                backgroundColor: "#666666",
                width: "100%",
                paddingVertical: 15,
                marginVertical: 10
            }
        }
    )
    return(
        <View style={StyleHome.Background}>
            <Text style={StyleHome.Cities}>Cities</Text>
            <TextInput placeholder="Tokyo" label="Tokyo" placeholderTextColor="#666666" style={StyleHome.InputCity}/>
            <TextInput placeholder="Japan" label="Japan" placeholderTextColor="#666666" style={StyleHome.InputCity}/>
            <Pressable onPress={()=> props.navigation.navigate('Cities')} style={StyleHome.ButtonAdd}>
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 15}}>Add city</Text>
            </Pressable>
        </View>
    )
}