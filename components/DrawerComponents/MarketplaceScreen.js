import * as React from 'react'
import {Text, Menu, VStack,HamburgerIcon, Box, Pressable, Center, NativeBaseProvider } from "native-base";



export default function MarketplaceScreen({navigation}){
    return(
        <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
        >
        <VStack space={5} alignItems="center">
          <Text>marketplace</Text>
        </VStack>
        </Center>

    )
}