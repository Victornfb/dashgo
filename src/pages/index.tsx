import { Flex, Button, Stack, FormLabel, InputGroup, InputRightElement, FormControl } from '@chakra-ui/react'
import { useState } from 'react'
import { BiShowAlt, BiHide } from 'react-icons/bi'
import { Input } from '../components/Form/Input'

export default function SignIn() {
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
          <Input
            type="email"
            name="email"
            label="E-mail"
          />

          <Input
            type="password"
            name="password"
            label="Senha"
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
