import { Flex, Input, Button, Stack, FormLabel, InputGroup, InputRightElement, FormControl } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              focusBorderColor='pink.500'
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <InputGroup size='lg'>
              <Input
                id="password"
                name="password"
                type={show ? 'text' : 'password'}
                focusBorderColor='pink.500'
                bgColor="gray.900"
                variant="filled"
                _hover={{
                  bgColor: 'gray.900'
                }}
                size="lg"
              />
              <InputRightElement width='4.5rem' marginRight="4">
                <Button h='1.75rem' size='sm' onClick={handleClick} bgColor='pink.500'>
                  {show ? 'Esconder' : 'Mostrar'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
