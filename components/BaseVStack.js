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
    ScrollView,
  } from "native-base";

  import { useNavigation } from '@react-navigation/native';

  import {MaterialIcons} from "@expo/vector-icons"
import { theme } from './theme';


export default function BaseVStack(props){
    //https://github.com/react-navigation/react-navigation/issues/7961#issuecomment-610025502
    //https://reactnavigation.org/docs/use-navigation

    
    
    return(
    <VStack space={5} alignItems="flex-start" p={4} {...props} >
       {props.children}
    </VStack>

    )
}