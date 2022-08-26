import React from "react";
import { useState } from "react";
import {
  Text,
  Divider,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Icon,
  IconButton,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import HomeScreen from "./components/DrawerComponents/HomeScreen";
import ChatScreen from "./components/DrawerComponents/ChatScreen";
import SettingScreen from "./components/DrawerComponents/SettingScreen";
import MarketplaceScreen from "./components/DrawerComponents/MarketplaceScreen";
import MyProfileScreen from "./components/DrawerComponents/MyProfileScreen";
import MyAccountSettingScreen from "./components/DrawerComponents/MyAccountSettingScreen";

import LogIn from "./components/AuthComponents/LogIn";
import SignUp from "./components/AuthComponents/SignUp";
import ForgotPassword from "./components/AuthComponents/ForgotPassword";

import DrawerButton from "./components/SmallComponents/DrawerButton";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { color } from "react-native-reanimated";




import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';





const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



function CustomDrawerContent(props,{navigation}) {



  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Divider/>
      <DrawerItem
        label="Help"
        onPress={() => console.log("help button is pressed")}
      />
    </DrawerContentScrollView>
  );
}


export default function App() {
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  const [isSignedIn,setIsSignedIn]= useState(true)


  const customTheme = extendTheme({});
  //https://docs.nativebase.io/customizing-components


  return (
    <NativeBaseProvider theme={customTheme}>
    <NavigationContainer>


      <Drawer.Navigator 
      useLegacyImplementation 
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props}  />}
      screenOptions={{
        headerLeft:() => (
          <DrawerButton/>
        ),
        drawerActiveTintColor:"red",
        drawerInactiveTintColor:"red",
        drawerStyle:{
          backgroundColor: "white",
        },
      }}
      >



        {isSignedIn ? (
          <>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ 
              headerShown: false,
              drawerIcon: () => (
                <Icon as={AntDesign} name="home" />
              ),
              }}/>
            <Drawer.Screen name="Chat" component={ChatScreen} options={{          
              drawerIcon: () => (
                <Icon as={Ionicons} name="chatbubble-ellipses-outline" />
              ),}}/>
            <Drawer.Screen name="Marketplace" component={MarketplaceScreen} options={{          
              drawerIcon: () => (
                <Icon as={Entypo} name="shop" />
              ),}}/>

            <Drawer.Screen name="MyProfile" component={MyProfileScreen} options={{          
              drawerIcon: () => (
                <Icon as={AntDesign} name="user"  />
              ),}}/>
            <Drawer.Screen name="MyAccountSetting" component={MyAccountSettingScreen} options={{          
              drawerIcon: () => (
                <Icon as={MaterialCommunityIcons} name="shield-account-outline" />
              ),}}/>
            <Drawer.Screen name="Setting" component={SettingScreen}options={{          
              drawerIcon: () => (
                <Icon as={AntDesign} name="setting"  />
              ),}}/>
          </>
        ) : (
          <>
            <Stack.Screen name="LogIn" component={LogIn} options={{
              headerShown:false,
            }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{
              headerShown:false,
            }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
              headerShown:false,
            }} />
          </>)}


      </Drawer.Navigator>


    </NavigationContainer>
    </NativeBaseProvider>

  );
}

