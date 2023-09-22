import React, {useContext, useState} from "react";
import {View, Text, TouchableOpacity, Image } from "react-native";
import commonContext from "../context/commonContext"; 
import data from "./data";

const HomeScreen = (props) => {

    // const  { category }  = useContext(commonContext);

    return (
        <View
        style={{flex:1,backgroundColor:"black",justifyContent:"flex-end"}}
        >
            <View
            style={{margin:25, width:140, gap:15}}
            >
                <Image source={require("../images/money.png")} style={{height:140,width:140}}/>
                <Text style={{color:"white", fontSize:18, fontWeight:600}}>{props.route.params ? props.route.params.name : "No Name"}</Text>
                <Text style={{color:"white", fontSize:16, fontWeight:600}}>{props.route.params ? props.route.params.description : "No Description"}</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate("Category")}
            style={{height:50,backgroundColor:"white",justifyContent:"center",alignItems:"center",margin:25,
            shadowColor: "white",
            elevation:5,
        }}
        activeOpacity={1}
        underlayColor="Transparent"
            >
                <Text style={{fontWeight:600, fontSize:15,color:"black"}}>Go to Category Screen</Text>
            </TouchableOpacity>
        </View>
    );
    }

export default HomeScreen;