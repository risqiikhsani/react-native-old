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
    FlatList,
    ScrollView,
  } from "native-base";



  import { ThreeDotsIcon } from 'native-base';


import { Pressable } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';


import { theme } from '../theme';

import BaseBox from '../BaseBox';
import CommentList from '../Comment/CommentList';
import Post from './Post';
import EnterInput from '../GlobalComponents/EnterInput';

export default function PostDetail({route,navigation}){
  





    const { postId } = route.params;

// fetch postdata from postId
const [postData,setPostData] = useState({
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  poster:{
    id:"gegege1",
    fullName: "Afreen Khan",
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  timeStamp: "12:47 PM",
  text: "Good Day!",
  likes_amount:"1432",
  comments_amount:"342",
  shares_amount:"15",
  I_liked:true,
})


    return(
      <>

    
        <Box h="100%">
        <ScrollView >
        <Post data={postData}/>
        <CommentList postId={postId}/>
        
        </ScrollView>
        <EnterInput/>
        </Box>




 
      
        
      </>

    )
}