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
import ReplyList from './ReplyList';

export default function ReplyDetail({route,navigation}){


    return(
<Text>reply detail</Text>
    )
}