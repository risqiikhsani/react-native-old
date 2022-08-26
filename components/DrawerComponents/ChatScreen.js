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
  } from "native-base";


  

export default function ChatScreen({navigation}){
    return(
      <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
      >
        <VStack space={5} alignItems="center">
          <Text>Chat</Text>
        </VStack>
      </Center>

    )
}