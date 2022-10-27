import { Button, Flex, Heading, Input, useColorMode, Box, useColorModeValue, Center } from '@chakra-ui/react';
import { useState } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import NextLink from "next/link"


const Register = () => {

    const { toggleColorMode } = useColorMode();

    const formBackground = useColorModeValue("gray.100", "gray.700");
    const [toggle, setToggle] = useState(false);

    return (
        <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
            <Flex
                direction={"column"}
                background={formBackground}
                p={12}
                rounded={6}
                position={"relative"}
            >
                <Heading mb={6} >
                    Register
                </Heading>
                <Input
                    
                    placeholder="Name"
                    variant={"outline"}
                    mb={3}
                    type="name"
                />
                <Input
                    placeholder="Email..."
                    variant={"outline"}
                    mb={3}
                    type="email"
                />
                <Input
                    placeholder='********'
                    variant={"outline"}
                    type="password"
                    mb={3}
                />
                 <Input
                    placeholder='********'
                    variant={"outline"}
                    type="password"
                    mb={6}
                />

                <Button colorScheme={"teal"}>Register</Button>


                <NextLink href='/' passHref>
                    <Center>
                        <Button colorScheme='teal' variant='link'> Login</Button>
                    </Center>
                </NextLink>

                <Box
                    position={"absolute"}
                    top={2}
                    right={2}
                    cursor={"pointer"}
                    onClick={() => {
                        toggleColorMode();
                        setToggle(!toggle);
                    }}
                >
                    {toggle ? <IoSunny /> : <IoMoon />}
                </Box>

            </Flex>
        </Flex>
    );
};

export default Register;