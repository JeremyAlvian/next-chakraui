import { Button, Flex, Heading, Input, useColorMode, Box, useColorModeValue, Center, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import NextLink from "next/link"


const Register = () => {

    const { toggleColorMode } = useColorMode();

    const formBackground = useColorModeValue("gray.100", "gray.700");
    const [toggle, setToggle] = useState(false);

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [show2, setShow2] = useState(false);
    const handleClick2 = () => setShow2(!show2);

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
                <InputGroup>
                    <Input
                        placeholder='********'
                        variant={"outline"}
                        type={show ? 'text' : 'password'}
                        mb={3}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <InputGroup>
                    <Input
                        placeholder='conf pass'
                        variant={"outline"}
                        type={show2 ? 'text' : 'password'}
                        mb={3}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick2}>
                            {show2 ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

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