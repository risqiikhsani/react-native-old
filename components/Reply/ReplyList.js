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
    Button,
    Box,
    ScrollView,
    IconButton,
    Icon,
    TextArea,
    FlatList,
  } from "native-base";


import {MaterialIcons} from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons";
import EnterInput from '../GlobalComponents/EnterInput';
import Reply from './Reply';


export default function ReplyList(props,{navigation}){

    // fetch data from props.commentId
    const [commentData,setCommentData] = useState([
      {
        id: "1",
        replier:{
          id:"coba2232",
          fullName: "Udin",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:47 PM",
        text: "I like your post!",
        likes_amount:"3",
        I_liked:true,
      },
      {
        id: "2",
        replier:{
          id:"coba2as2",
          fullName: "Gery",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:50 PM",
        text: "awesome post! it reminds me of something",
        likes_amount:"0",
        I_liked:false,
      },
      {
        id: "3",
        replier:{
          id:"coaawd",
          fullName: "Amir",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:66 PM",
        text: "dude you're cool! , sometimes it works that way",
        likes_amount:"1",
        I_liked:true,
      },
      {
        id: "4",
        replier:{
          id:"coaawd",
          fullName: "Amir",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:66 PM",
        text: "finally something cool has come",
        likes_amount:"1",
        I_liked:true,
      },
      {
        id: "5",
        replier:{
          id:"coaawd",
          fullName: "Amir",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:66 PM",
        text: "dude you're cool!",
        likes_amount:"1",
        I_liked:true,
      },
      {
        id: "6",
        replier:{
          id:"coaawd",
          fullName: "Amir",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:66 PM",
        text: "awesome post indeed",
        likes_amount:"1",
        I_liked:true,
      },
      {
        id: "7",
        replier:{
          id:"coaawd",
          fullName: "Amir",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:66 PM",
        text: "I know sometimes it heart breaking but yk some bad things can get away on their own, but lately we could make it really good and satisfying",
        likes_amount:"1",
        I_liked:true,
      },
      {
        id: "8",
        replier:{
          id:"coaawd",
          fullName: "Amir",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:66 PM",
        text: "dude you're cool!",
        likes_amount:"1",
        I_liked:true,
      },
      {
        id: "9",
        replier:{
          id:"coaawd",
          fullName: "Amir",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:66 PM",
        text: "dude you're cool!",
        likes_amount:"1",
        I_liked:true,
      },
      {
        id: "10",
        replier:{
          id:"coaawd",
          fullName: "Amir",
          avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        timeStamp: "12:66 PM",
        text: "dude you're cool!",
        likes_amount:"1",
        I_liked:true,
      },
    ])
    
    
    const result = commentData.map((i) => <Reply key={i.id} data={i}/>)


    return(

        <>
        {result}
        </>
        
        
    )
}



