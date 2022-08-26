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
    ScrollView,
  } from "native-base";



  import { ThreeDotsIcon } from 'native-base';


import { Pressable } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

import { theme } from '../theme';


import EnterInput from '../GlobalComponents/EnterInput';
import Comment from '../Comment/Comment';
import ReplyList from '../Reply/ReplyList';

export default function CommentDetail({route,navigation}){
    const { commentId } = route.params;

  //fetch comment data from commentId

  const [commentData,setCommentData] = useState({
    id: "2",
    commentator:{
      id:"coba2as2",
      fullName: "Gery",
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    timeStamp: "12:50 PM",
    text: "awesome post! it reminds me of something",
    likes_amount:"0",
    replies_amount:"0",
    I_liked:"false",
  })


    return(


        <Box maxH="100%">
            <ScrollView>
                <Box p="2">
                <Comment data={commentData} lite="true"/>
                </Box>
                <Box pl="10">
                <ReplyList commentId={commentId}/>
                </Box>
            </ScrollView>
            <EnterInput/>
        </Box>
    )
}