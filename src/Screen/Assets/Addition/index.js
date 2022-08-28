import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    Button,
    Alert,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    TextInput
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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import axios from "axios";

import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_BASE_URL } from '../config';

const Addition = ({ navigation }) => {
    const [name, setName] = useState();
    const [DataDate, setDataDate] = useState();
    const [stato, setStato] = useState();
    const [description, setDrescription] = useState();
    const [image, setImage] = useState();
    const [StatoList,setStatoList]=useState([]);
    useEffect(() => {
        navigation.setOptions({ title: 'Aggiungi un nuov elemento' })
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Nome oggetto"
                    onChangeText={newText => setText(newText)}
                />
            </View>
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Data di scadenza"
                    onChangeText={newText => setText(newText)}
                />
            </View>
            <View>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={{ color: 'black' }}
                    selectedTextStyle={{ color: 'black' }}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={StatoList}
                    maxHeight={200}
                    search
                    labelField="label"
                    valueField="value"
                    placeholder="Select a Car *"
                    searchPlaceholder="Search..."
                    // value={previousCarList}
                    onChange={item => {
                        setCar(item);
                        console.log("vikkkk", item.label);
                        if (item.label == 'Select New Car') {
                            setIsShowPreviousCarList(!isShowPreviousCarList)
                        }
                        else {
                            setIsShowPreviousCarList(false)
                        }
                    }}
                />
            </View>
            <View>
                <TextInput
                    style={{ height: 80 }}
                    numberOfLines="5"
                    placeholder="Descrizione"
                    onChangeText={newText => setText(newText)}
                />
            </View>
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