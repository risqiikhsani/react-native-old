import * as React from 'react'
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    IconButton,
    Box,
  } from "native-base";

  import { useNavigation } from '@react-navigation/native';

  import {MaterialIcons} from "@expo/vector-icons"

export default function DrawerButton(){
    //https://github.com/react-navigation/react-navigation/issues/7961#issuecomment-610025502
    //https://reactnavigation.org/docs/use-navigation
    const navigation = useNavigation();
    
    return(
        <IconButton 
        onPress={() => navigation.openDrawer()}
        size="md" 
        variant="ghost" 
        _icon={{
        as: MaterialIcons,
        name: "menu"
        }} />
    )
}