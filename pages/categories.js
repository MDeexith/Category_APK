import React, { useContext, useState } from "react"
import {View, Text, TouchableOpacity,Image, ScrollView } from "react-native";
import data from "./data";
// import Micon from "react-native-vector-icons/MaterialCommunityIcons";


const CategoryScreen = ({navigation}) => {

    // const { setCategory } = useContext(CommonContext);
    const Data = data;

    const [ grid, setGrid ] = useState(false);

    return (
        <View
        style={{flex:1}}
        >
            <View style={{height:50, borderBottomWidth:1,borderColor:"black"}}>
                <TouchableOpacity onPress={() => setGrid(!grid)}
                style={{flexDirection:"row", justifyContent:"space-between", margin:10}}
                >
                    <Text style={{fontWeight:600,fontSize:20}}>CRED</Text>
                    {grid ? <Image source={require("../images/grid-on.png")}  style={{height:20,width:20}}/> : <Image source={require("../images/grid-off.png")} style={{height:20,width:20}}/>}
                </TouchableOpacity>
            </View>
            <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
            >
            
            <View
            style={{
                flexDirection: "column",
                flex:1,
                backgroundColor: "black"
            }}
            >
                {Data.map((section) => {
                    return (
                        <View
                        style={{
                            height: grid ? 60*section.section_properties.items.length : 140*section.section_properties.items.length,
                            width: "100%",
                            flexDirection: "column",
                            margin: 10,
                            marginBottom:10,
                        }}
                        >
                            <Text style={{fontSize:15,fontWeight:600,color:"white",left:10}}>{section.section_properties.title}</Text>
                            
                            <View
                            style={{
                                flexDirection: grid ? "row" : "column",
                                flexWrap: grid ? "wrap" : "nowrap",
                                margin:10,
                            }}
                            >
                            {section.section_properties.items.map((item) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        // setCategory(item.display_data);
                                        navigation.navigate("Home", {
                                            name: item.display_data.name,
                                            description: item.display_data.description,
                                            icon_url: "../images/money.png",
                                        }
                                        );
                                    }}
                                    style={{
                                        flexDirection: grid ? "column" : "row",
                                        margin: 5,
                                        marginLeft: grid ? 0:20,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        // backgroundColor:"red",
                                        gap: grid ? -10 : 0,
                                    }}
                                    activeOpacity={1}
                                    underlayColor="Transparent"
                                    >
                                        <Image source={require("../images/money.png")} style={{height:40,width:40,}}/>
                                        <View
                                        style={{
                                            flexDirection: "column",
                                            margin: 10,
                                            height: 100,
                                            width: grid ? 100 : "90%",
                                            justifyContent: "center",
                                            left: grid ? 0: 10,
                                            alignItems: grid ? "center" : "flex-start",

                                        }}
                                        >
                                            <Text style={{fontSize:14,fontWeight:600, color:"white"}}>{item.display_data.name}</Text>
                                            { grid ? null : <Text style={{fontSize:13,fontWeight:600, color:"#ababab"}}>{item.display_data.description}</Text>}
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                            </View>
                        </View>
                    );
                })}
            </View>
                </ScrollView>
        </View>
    );

};

export default CategoryScreen;
