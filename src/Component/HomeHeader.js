import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const style=StyleSheet.create({
    headerConatiner:{
        flexDirection:'row',
        backgroundColor:'#04487b',
        width:'100%',
    },
    titleText:{
        fontSize:16,fontWeight:'800',
        alignSelf:'center',
        color:'white',
        marginLeft:'30%',
        marginBottom:10
        // justifyContent:'center'
    }
})
const HomeHeader=({title,openDrawer})=>{
    return(
        <View style={style.headerConatiner}>
            <TouchableOpacity onPress={openDrawer}>
            <Ionicons name="menu" color='white'  size={30}></Ionicons>
            </TouchableOpacity>
            <Text style={style.titleText}>{title}</Text>
        </View>
    )
}
export default HomeHeader;