import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function HeaderTab(props) {

    const [ activeTab , setActiveTab] = useState("Delivery");
    return (
        <View style={{ flexDirection : "row" , alignSelf: "center"}}>
            <HeaderButton text="Delivery" btnClor="black" textColor="white" activeTab ={activeTab} setActiveTab={setActiveTab}/>
            <HeaderButton text="Pickup" btnClor="white" textColor="black"  activeTab ={activeTab} setActiveTab={setActiveTab}/>
          
        </View>
    );
}

const HeaderButton = ( props ) => (
<TouchableOpacity
 style={{ paddingVertical : 6 , paddingHorizontal : 16 , backgroundColor: props.activeTab === props.text ? 'black' : "white" , borderRadius : 30}}
 onPress={()=> props.setActiveTab(props.text)}>
    <Text style={{ color : props.activeTab === props.text ? 'white' : "black" , fontSize : 15 , fontWeight : "900" }}>{props.text}</Text>
</TouchableOpacity>

);

export default HeaderTab;