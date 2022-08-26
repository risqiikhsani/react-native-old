import * as React from 'react'
import { Text, Center, NativeBaseProvider, Pressable } from 'native-base';

export default function NameLink(props) => {
  return(
    <Pressable onPress={()=> props.navigationFunc}>
    <Text color="blue.100">props.name</Text>
    </Pressable>

  ) 
};

