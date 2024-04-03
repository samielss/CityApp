import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import CityCard from "../Helpers/CityCard";

export default props => {
    const parisRoute = () => props.navigation.navigate('CitiesLocations')

    return(
        <View style={{flex: 1}}>
            <CityCard cityText="Paris" countryText="France" cityRoute={parisRoute}/>
            <CityCard cityText="Tokyo" countryText="Japan" cityRoute={parisRoute}/>
            <CityCard cityText="Amsterdam" countryText="Netherlands" cityRoute={parisRoute}/>
            <CityCard cityText="Portland" countryText="USA" cityRoute={parisRoute}/>
            <CityCard cityText="Mumbai" countryText="India" cityRoute={parisRoute}/>
            <CityCard cityText="London" countryText="England" cityRoute={parisRoute}/>
            <CityCard cityText="Barcelona" countryText="Spain" cityRoute={parisRoute}/>
            <CityCard cityText="Rio de Janeiro" countryText="Brazil" cityRoute={parisRoute}/>
        </View>
    )
}