import * as React from 'react'
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";

  import BaseBox from '../BaseBox';
  import BaseVStack from '../BaseVStack';
  

export default function SignUp({navigation}){
    return(
        <BaseBox>
        <BaseVStack>
            <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }} fontWeight="semibold">
                Welcome
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                color: "warmGray.200"
            }} fontWeight="medium" size="xs">
                Sign up to continue!
                </Heading>
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Username</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <Button mt="2" colorScheme="indigo">
                    Sign up
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }}>
                    already have an account?{" "}
                    </Text>
                    <Link 
                    onPress={() => navigation.navigate('LogIn')}
                    _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm"
                }} >
                    Log In
                    </Link>
                </HStack>
                </VStack>
            </Box>
            </Center>
        </BaseVStack>
        </BaseBox>
        

    )
}