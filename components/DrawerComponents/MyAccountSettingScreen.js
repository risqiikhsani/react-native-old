import * as React from 'react'
import { useState } from 'react';
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
    FormControl,
    Divider,
    Input,
    Stack,
    Button,
  } from "native-base";
import BaseBox from '../BaseBox';
import { acc } from 'react-native-reanimated';
import BaseVStack from '../BaseVStack';


export default function MyAccountSettingScreen({navigation}){

    const [accountData, setAccountData] = useState({
      username:"testing",
      email:"testing@gmail.com",
    })
    return(
        
    <BaseBox>
      <BaseVStack>

        <Box>

          <FormControl isDisabled mb="5">
            <FormControl.Label>
              Username
            </FormControl.Label>
            <Text pl={2}>{accountData.username}</Text>
            <FormControl.Label>
              Email
            </FormControl.Label>
            <HStack alignItems="center" space="2">
            <Text pl={2}>{accountData.email}</Text>
            <Button size="xs" bg="#8d99ae" >edit</Button>
            </HStack>
            
          </FormControl>

          </Box>
          <Divider />
          <Text fontSize="xl">Password and Authentication</Text>
          <Button onPress={() => console.log("hello world")}>Change Password</Button>
          <Text fontSize="lg">TWO-FACTOR AUTHENTICATION</Text>
          <Text>
            Protect your account with an extra layer of security. Once configured, you'll be required to enter both your password and an authentication code from your mobile phone in order to sign in.
          </Text>
          <Button onPress={() => console.log("hello world")}>Enable Two-Factor Auth</Button>
          <Text fontSize="lg">
            ACCOUNT REMOVAL
          </Text>
          <Text>
            Disabling your account means you can recover it at any time after taking this action.
          </Text>
          <HStack space={2}>
          <Button onPress={() => console.log("hello world") } colorScheme="secondary">Disable Account</Button>
          <Button onPress={() => console.log("hello world")} variant="outline" colorScheme="secondary">Delete Account</Button>
          </HStack>

    </BaseVStack>
           
    </BaseBox>
    )
}


  