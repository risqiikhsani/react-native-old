

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
    IconButton,
    Button,
    TextArea,
    Icon,
  } from "native-base";

  import { Entypo } from "@expo/vector-icons";


export default function EnterInput(props,{navigation}){
    return(
        <>
        <HStack alignItems="center" space="1">
            <IconButton icon={<Icon as={Entypo} name="emoji-happy" />} borderRadius="full"/>
            <TextArea placeholder="Add a comment..." w="75%"  />
            <Button size="sm" variant="ghost">
            Post
            </Button>
        </HStack>

        </>

    )
}