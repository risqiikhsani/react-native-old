import * as React from 'react'
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";

  import BaseBox from '../BaseBox';
  import BaseVStack from '../BaseVStack';
  

export default function ForgotPassword({navigation}){
    return(
        <BaseBox>
        <BaseVStack>
            <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }} fontWeight="semibold">
                Forgot Password?
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                color: "warmGray.200"
            }} fontWeight="medium" size="xs">
                Try recover your account !
                </Heading>
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input type="email"/>
                </FormControl>

                <Button mt="2" colorScheme="indigo">
                    Send Verification Code 
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }}>
                    Already have an account?{" "}
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
                <HStack justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }}>
                    Don't have an account ?{" "}
                    </Text>
                    <Link 
                    onPress={() => navigation.navigate('SignUp')}
                    _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm"
                }} >
                    Sign Up
                    </Link>
                </HStack>
                </VStack>
            </Box>
            </Center>
        </BaseVStack>
        </BaseBox>
        

    )
}