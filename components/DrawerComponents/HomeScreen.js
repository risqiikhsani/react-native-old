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
    Button,
  } from "native-base";


  import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
import PostList from '../Post/PostList';
import Post from '../Post/Post';
import User from '../GlobalComponents/User';
import Reply from '../Reply/Reply';
import ReplyDetail from '../Reply/ReplyDetail';
import PostDetail from '../Post/PostDetail';
import CommentDetail from '../Comment/CommentDetail';

import DrawerButton from '../SmallComponents/DrawerButton';
import TestingPage from '../TestingPage';

export default function HomeScreen({navigation}){
    return(

        <Stack.Navigator initialRouteName="PostList">
          <Stack.Screen name="PostList" component={PostList} options={{
            headerLeft:() => (
                <DrawerButton/>
            ),
            title: 'Home' ,
          }}/>
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Post" component={Post}/>
          <Stack.Screen name="ReplyDetail" component={ReplyDetail}/>
          <Stack.Screen name="CommentDetail" component={CommentDetail}/>
          <Stack.Screen name="PostDetail" component={PostDetail}
          options={({ route }) => ({ title: `${route.params.name}`+"`s post" })}
          />
        </Stack.Navigator>

    )
}