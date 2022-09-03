import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";

import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_BASE_URL } from '../../../Services/url';

const Addition = ({ navigation }) => {
    const [name, setName] = useState();
    const [DataDate, setDataDate] = useState();
    const [stato, setStato] = useState();
    const [description, setDrescription] = useState();
    const [image, setImage] = useState();
    const [StatoList, setStatoList] = useState([]);
    const [instructionImage,setInstructionImage]=useState();
    useEffect(() => {
        navigation.setOptions({ title: 'Aggiungi un nuov elemento' })
    }, []);

    const assestImage=()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }
    const instructionAssets=()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }
    const assetsAddtion=()=>{
        navigation.navigate('AssetsListig')
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.inputConatiner}>
                    <TextInput
                        style={{ height: 40, marginLeft: 10 }}
                        placeholder="Nome articolo"
                        placeholderTextColor="black"
                        onChangeText={newText => setName(newText)}
                    />
                </View>
                <View style={styles.inputConatiner}>
                    <TextInput
                        style={{ height: 40, marginLeft: 10 }}
                        placeholder="Descrizione"
                        placeholderTextColor="black"
                        onChangeText={newText => setDataDate(newText)}
                    />
                </View>
                <View style={styles.inputConatiner}>
                    <Dropdown
                        style={{ marginLeft: 10 }}
                        placeholderStyle={{ color: 'black' }}
                        selectedTextStyle={{ color: 'black' }}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={StatoList}
                        maxHeight={200}
                        search
                        labelField="label"
                        valueField="value"
                        placeholder="Categorie"
                        searchPlaceholder="Search..."
                        // value={previousCarList}
                        onChange={item => {
                            setStato(item)
                        }}
                    />
                </View>
                <View style={styles.inputConatiner}>
                    <Dropdown
                        style={{ marginLeft: 10 }}
                        placeholderStyle={{ color: 'black' }}
                        selectedTextStyle={{ color: 'black' }}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={StatoList}
                        maxHeight={200}
                        search
                        labelField="label"
                        valueField="value"
                        placeholder="Sottocategoria"
                        searchPlaceholder="Search..."
                        // value={previousCarList}
                        onChange={item => {
                            setStato(item)
                        }}
                    />
                </View>
                <View style={styles.inputConatiner}>
                    <Dropdown
                        style={{ marginLeft: 10 }}
                        placeholderStyle={{ color: 'black' }}
                        selectedTextStyle={{ color: 'black' }}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={StatoList}
                        maxHeight={200}
                        search
                        labelField="label"
                        valueField="value"
                        placeholder="Terza categoria"
                        searchPlaceholder="Search..."
                        onChange={item => {
                            setStato(item)
                        }}
                    />
                </View>
                <View style={styles.inputConatiner}>
                    <Dropdown
                        style={{ marginLeft: 10 }}
                        placeholderStyle={{ color: 'black' }}
                        selectedTextStyle={{ color: 'black' }}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={StatoList}
                        maxHeight={200}
                        search
                        labelField="label"
                        valueField="value"
                        placeholder="Asset Status"
                        searchPlaceholder="Search..."
                        // value={previousCarList}
                        onChange={item => {
                            setStato(item)
                        }}
                    />
                </View>
                <View style={styles.inputConatiner}>
                    <Dropdown
                        style={{ marginLeft: 10 }}
                        placeholderStyle={{ color: 'black' }}
                        selectedTextStyle={{ color: 'black' }}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={StatoList}
                        maxHeight={200}
                        search
                        labelField="label"
                        valueField="value"
                        placeholder="Posizione"
                        searchPlaceholder="Search..."
                        // value={previousCarList}
                        onChange={item => {
                            setStato(item)
                        }}
                    />
                </View>
                <View style={styles.inputConatiner}>
                    <TextInput
                        style={{ height: 80, marginLeft: 10 }}
                        // numberOfLines="5"
                        placeholder="Notes"
                        placeholderTextColor="black"
                        onChangeText={newText => setDrescription(newText)}
                    />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <View style={{ marginLeft: 20, marginTop: 10,alignItems:'center' }}>
                    <Text>Immagine</Text>
                    <TouchableOpacity onPress={()=>assestImage()}>
                        <Ionicons name="camera" color='#04487b' size={16}></Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20, marginTop: 10,alignItems:'center'}}>
                    <Text>Istruzioni</Text>
                    <TouchableOpacity onPress={()=>instructionAssets()}>
                        <Ionicons name="camera" color='#04487b' size={16}></Ionicons>
                    </TouchableOpacity>

                </View>
                </View>
                <View style={{ alignSelf: 'center', width: '60%',marginTop:10,marginBottom:20 }}>
                    <Button title='Save' onPress={assetsAddtion} color="#04487b" />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingLeft: 15,
        paddingRight: 15,
    },
    inputConatiner: { borderWidth: 1, alignSelf: 'center', width: '90%', margin: 10, borderRadius: 5,padding:5 },
    itemStyle: {
        padding: 10,
    },
    viewStyle: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 40,
        padding: 16,
    },
    textStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
    fontFamily: {
        fontFamily: 'Poppins-Regular'
    }
});
export default Addition;