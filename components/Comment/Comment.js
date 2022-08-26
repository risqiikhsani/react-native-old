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
    
  } from "native-base";

  import { ThreeDotsIcon } from 'native-base';


import { Pressable } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

import { theme } from '../theme';

export default function Comment(props){

  const {lite = "false"} = props;

  const navigation = useNavigation();


    return(
      <HStack space={1} flex={1} px="2">
      <Avatar 
      size="sm"
      bg="green.500" 
      source={{
        uri: `${props.data.commentator.avatarUrl}`
      }}
      >
        {props.data.id}
      </Avatar>
      <VStack maxWidth="90%">
        <Box 
        rounded={10} px="1" 
        _dark={{ bg: theme.inner.dark }} _light={{ bg: theme.inner.light }} >
        <Text bold={true}>{props.data.commentator.fullName}</Text>
        <Text>{props.data.text}</Text>
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
          {/* <Avatar bg="lightBlue.400" size="20px">
          <Icon as={MaterialIcons} name="thumb-up-off-alt" color="coolGray.800" size="sm" />
          </Avatar> */}
        </HStack>
        
          {
            lite=="true"?<></>:(
              <Button p="-2" size="xs" variant="ghost" w="100"
              onPress={() => {
                console.log("I'm Pressed")
                navigation.navigate('CommentDetail', {
                  commentId: `14`,
                })
              }}
              >
                View previous replies
              </Button>  
            )
          }

      </VStack>
    </HStack>
    )
}