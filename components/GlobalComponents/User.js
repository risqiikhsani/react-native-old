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
    Box,
    Avatar,
    Button,
    Icon,
    IconButton,
  Image,
  } from "native-base";
  import { Ionicons } from '@expo/vector-icons'
  import { AntDesign } from '@expo/vector-icons'; 
  import {MaterialCommunityIcons} from '@expo/vector-icons'; 
  import { Feather } from '@expo/vector-icons'; 

import BaseBox from '../BaseBox';

export default function User({route,navigation}){

  const { userId } = route.params;


    return(
      <BaseBox>

        <VStack space={5} alignItems="center">



        <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
          uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        }}>
          RB
        </Avatar>

        <Heading size="xl">Kucing</Heading>
        <Center rounded="lg" bg="blue.400" p="1">
          <HStack alignItems="center">
          <Avatar bg="amber.500" mr="1" size="xs">
             ID
          </Avatar>
          <Text>{userId}</Text>
          <IconButton
          onPress={() => console.log("PRESSED")}
           variant="ghost" _icon={{
            color:"amber.500",
            as: Feather,
            name: "copy"
          }} 
          />
          </HStack>
        </Center>
        

        <HStack space={3}>
          <Button leftIcon={<Icon as={Ionicons} name="md-person-add" size="sm" />}>
            Connect
          </Button>
          <Button variant="subtle" endIcon={<Icon as={AntDesign} name="message1" size="sm" />}>
            Message
          </Button>
        </HStack>

        {/* <Text isTruncated maxW="300" w="80%">
          NativeBase gives you a contrasting color based on your theme. You can also
          customise it using the useAccessibleColors hook.
        </Text>; */}
        <Text isTruncated fontSize="sm" maxW="80%"> NativeBase NativeBase NativeBase NativeBase NativeBaseNativeBaseNativeBaseNativeBaseNativeBase NativeBase NativeBase NativeBase NativeBase NativeBase NativeBase NativeBase NativeBase NativeBase</Text>
        </VStack>

      </BaseBox>

    )
}