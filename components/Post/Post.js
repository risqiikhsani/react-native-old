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

import CommentList from '../Comment/CommentList';

function PostModal(props) {
  return(
    <Center>
      <Modal size="full" isOpen={props.show} onClose={() => props.setShow(false)}>
        <Modal.Content maxWidth="400px" marginBottom="0" marginTop="auto">
          <Modal.CloseButton />
          <Modal.Header>Menu</Modal.Header>
          <Modal.Body>
            <VStack>
              <Button size="sm" variant="ghost" w="100%">
                Delete
              </Button>
              <Button size="sm" variant="ghost" w="100%">
                Report
              </Button>
              <Button size="sm" variant="ghost" w="100%">
                Don't show post from this user
              </Button>
              <Button size="sm" variant="ghost" w="100%">
                Save post
              </Button>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

function PostShareModal(props) {
  return(
    <Center>
      <Modal size="full" isOpen={props.show} onClose={() => props.setShow(false)}>
        <Modal.Content maxWidth="400px" marginBottom="0" marginTop="auto">
          <Modal.CloseButton />
          <Modal.Header>Share</Modal.Header>
          <Modal.Body>
          <VStack>
              <Button size="sm" variant="ghost" w="100%">
                Share by posting
              </Button>
              <Button size="sm" variant="ghost" w="100%">
                Share to friends
              </Button>
              <Button size="sm" variant="ghost" w="100%">
                Copy link
              </Button>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  )
}


export default function Post(props){


  const [showPostModal, setShowPostModal] = useState(false)
  const [showPostShareModal, setShowPostShareModal] = useState(false)

  const navigation = useNavigation();


    return(
      <>
      <Box
        _dark={{ bg: theme.inner.dark }}
        _light={{ bg: theme.inner.light }}
        px="2"
        paddingTop="2"
        rounded="xl"
        _text={{
          fontSize:"md",
          fontWeight:"medium",
          textAlign:"center"
        }}
        shadow="2"
        m="2"
      >
        <VStack>
          <HStack justifyContent="space-between">
            <Pressable 
            onPress={() => {
              console.log("I'm Pressed")
              navigation.navigate('User', {
                userId: `${props.data.poster.id}`,
              })
            }}
            >
              <HStack >
                <Avatar 
                bg="green.500" 
                source={{
                  uri: `${props.data.poster.avatarUrl}`
                }}
                >
                {props.data.poster.fullName}
                </Avatar>
                <VStack mx="2">
                <Text fontSize="md">
                {props.data.poster.fullName}
                </Text>
                <Text fontSize="xs">
                {props.data.timeStamp}
                </Text>
                </VStack>

              </HStack>
            </Pressable>




            {/* <IconButton 
            variant="ghost" 
            size="sm"
            _icon={{
              as: MaterialIcons,
              name: "more-vert"
            }} /> */}
            <Pressable onPress={() => setShowPostModal(true)}>
              <ThreeDotsIcon />
            </Pressable>
            

          </HStack>
          {/* <Divider bg="indigo.500" thickness="1"/> */}
        <Text>
        {props.data.text}
        </Text>
        <HStack justifyContent="space-between">
          <Text fontSize="xs" fontWeight="thin" color="gray.700">
            {props.data.likes_amount} likes
          </Text>
          <Text fontSize="xs" fontWeight="thin" color="gray.700">
          {props.data.comments_amount} comments
          </Text>
          <Text fontSize="xs" fontWeight="thin" color="gray.700">
          {props.data.shares_amount} shares
          </Text>
        </HStack>
        <Divider thickness="1"/>

        <HStack justifyContent="space-around" py="2px">

          <Button size="xs" colorScheme="gray" variant="ghost" leftIcon={<Icon as={MaterialIcons} name="thumb-up-off-alt" color="coolGray.800" size="sm" />}> 
            Like
          </Button>
          <Button
            onPress={() => {
              console.log("I'm Pressed")
              navigation.navigate('PostDetail', {
                postId: `${props.data.id}`,
                name:`${props.data.poster.fullName}`,
              })
            }}
          size="xs" colorScheme="gray" variant="ghost" leftIcon={<Icon as={MaterialIcons} name="comment" color="coolGray.800" size="sm" />}> 
            Comment
          </Button>
          <Button onPress={()=> setShowPostShareModal(true)} size="xs" colorScheme="gray" variant="ghost" leftIcon={<Icon as={MaterialIcons} name="share" color="coolGray.800" size="sm" />}> 
            Share
          </Button>


        </HStack>
        </VStack>


      

      </Box>
      <PostModal show={showPostModal} setShow={setShowPostModal}/>
      <PostShareModal show={showPostShareModal} setShow={setShowPostShareModal}/>
      </>
      
    )
}