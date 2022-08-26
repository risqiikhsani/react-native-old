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
    Fab,
    Icon,
    Modal,
    FormControl,
    Input,
    TextArea,
  } from "native-base";

import Post from './Post';
import BaseBox from '../BaseBox';
import { AntDesign } from "@expo/vector-icons";

const Example = (props) => {
  return(
    <>
    <Fab 
    onPress={()=> props.show(true)}
    renderInPortal={false} 
    shadow={2} 
    size="xs" 
    right={30} bottom={50}
    icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} 
    />
    </>
  )
        
};

const CreatePostModal = (props) => {
  const [textAreaValue, setTextAreaValue] = useState("Value Controlled");

  const demoValueControlledTextArea = e => {
    setTextAreaValue(e.currentTarget.value);
  };


  return(
    <Center>
      <Modal isOpen={props.show} onClose={() => props.setShow(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Create Post</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>What's on your mind?</FormControl.Label>
              <TextArea value={textAreaValue} onChange={demoValueControlledTextArea} maxH="250"/>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => props.setShow(false)}>
                Cancel
              </Button>
              <Button onPress={() => props.setShow(false)}>
                Post
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default function PostList({navigation}){

  const [showCreatePostModal,setShowCreatePostModal] = useState(false)

    const data = [{
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
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        poster:{
          id:"gegege1",
          fullName: "Sujita Mathur",
          avatarUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU`,
        },
        timeStamp: "11:11 PM",
        text: "I know sometimes it heart breaking but yk some bad things can get away on their own, but lately we could make it really good and satisfying",
        likes_amount:"1432",
        comments_amount:"342",
        shares_amount:"15",
        I_liked:true,
      }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        poster:{
          id:"gegege1",
          fullName: "Anci Barroco",
          avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
        },
        timeStamp: "6:22 PM",
        text: "Good Day!",
        likes_amount:"1432",
        comments_amount:"342",
        shares_amount:"15",
        I_liked:true,
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        poster:{
          id:"gegege1",
          fullName: "Aniket Kumar",
          avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
        },
        timeStamp: "8:56 PM",
        text: "All the best",
        likes_amount:"1432",
        comments_amount:"342",
        shares_amount:"15",
        I_liked:true,
      }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        poster:{
          id:"gegege1",
          fullName: "Kiara",
          avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
        },
        timeStamp: "12:47 PM",
        text: "I will call today.",
        likes_amount:"1432",
        comments_amount:"342",
        shares_amount:"15",
        I_liked:true,
      }];
    
    const result = data.map((i) => (<Post key={i.id} data={i} />))
    return(
      <>
        <Example show={setShowCreatePostModal}/>
        <CreatePostModal show={showCreatePostModal} setShow={setShowCreatePostModal}/>
        <BaseBox>
        {result}

        </BaseBox>
        
      </>

    )
}