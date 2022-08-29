
import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Signin from '../Screen/Auth/Signin';
import Signup from '../Screen/Auth/Signup';
import ForgotPassword from '../Screen/Auth/ForgotPassword';
import AssetAddition from'../Screen/Assets/Addition';
import AssetsEditing from '../Screen/Assets/Editing';
import AssetsListig from '../Screen/Assets/Listing';
import DocumentAddition from '../Screen/Documents/Addition';
import DocumentsListing from '../Screen/Documents/Listing';
import DocumentEditing from '../Screen/Documents/Editing';
import LocationAddition from '../Screen/Locations/Addition';
import LocationListing from '../Screen/Locations/Listing';
import LocationEditing from '../Screen/Locations/Editing';
import ProfileScreen from '../Screen/ProfileScreen';
import AssetViewScreen from '../Screen/Assets/View';
import DocumentViewScreen from '../Screen/Documents/View';
import LocationViewScreen from '../Screen/Locations/View';
// import DrawerNavigation from './DrawerNavigation';
const Stack = createNativeStackNavigator();
const StacksNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="AssetAddition" component={AssetAddition} options={{title:'Aggiungi nuovo oggetto' }} />
            <Stack.Screen name="AssetsEditing"  component={AssetsEditing} options={{ headerShown: false }} />
            <Stack.Screen name="AssetsListig" component={AssetsListig} options={{headerShown:false}} />
            <Stack.Screen name="DocumentsListing" component={DocumentsListing} options={{ headerShown: false }} />
            <Stack.Screen name="DocumentAddition" component={DocumentAddition} options={{ headerShown: false }} />
            <Stack.Screen name="DocumentEditing" component={DocumentEditing} options={{ headerShown: false }} />
            <Stack.Screen name="LocationListing" component={LocationListing} options={{ headerShown: false }} />
            <Stack.Screen name="LocationAddition" component={LocationAddition} options={{ headerShown: false }} />
            <Stack.Screen name="LocationEditing" component={LocationEditing} options={{ headerShown: false }} />
           <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title:'Profilo'}}/>
          
           <Stack.Screen name="AssetViewScreen" component={AssetViewScreen} options={{title:"Dettagli dell'articolo" ,headerTintColor:'white', headerStyle:{backgroundColor:'#04487b'}}} />
            <Stack.Screen name="DocumentViewScreen" component={DocumentViewScreen} options={{ headerShown: false }} />
           <Stack.Screen name="LocationViewScreen" component={LocationViewScreen} options={{title:'Profilo'}}/>
           {/* <Stack.Screen name="Drawer" component={DrawerNavigation} options={{headerShown:false}}/> */}
        </Stack.Navigator>
    )
}
export default StacksNavigation;