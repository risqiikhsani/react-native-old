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
    Avatar,
    Divider,
    Icon,
    IconButton,
    Button,
    Menu,
    TextArea,
    Modal,
    FormControl,
    Input,
    Card,
  } from "native-base";



  import { ThreeDotsIcon } from 'native-base';


import { Pressable } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

import { theme } from '../theme';

export default function Reply(props,{route,navigation}){



    return(<HStack space={1}>
      <Avatar 
      size="sm"
      bg="green.500" 
      source={{
        uri: `awdawdawdaw`
      }}
      >
        O
      </Avatar>
      <VStack>
        <Box rounded={10} px="1" _dark={{ bg: theme.inner.dark }} _light={{ bg: theme.inner.light }}>
        <Text bold={true}>name</Text>
        <Text>reply</Text>
        </Box>
        <HStack space={3} alignItems="center">
          <Button p="-2" size="xs" variant="ghost">
            3h
          </Button>
          <Button p="-2" size="xs" variant="ghost" >
            Like
          </Button>
          <Button p="-2" size="xs" variant="ghost" >
            Reply
          </Button>
        </HStack>
        
      </VStack>
    </HStack>
    )
}