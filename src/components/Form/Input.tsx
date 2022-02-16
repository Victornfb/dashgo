import { Button, FormControl, FormLabel, Icon, Input as ChakraInput, InputGroup, InputProps as ChakraInputProps, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
  type: string;
}

export function Input({ name, label, type, ...rest }: InputProps) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      { type === "password" ?
        <InputGroup size='lg'>
          <ChakraInput
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
          <InputRightElement width='4rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick} bg='pink.500'_hover={{bgColor:'pink.700'}} _active={{bgColor:'pink.700'}}>
              {show ? <Icon as={BiHide} /> : <Icon as={BiShowAlt} />}
            </Button>
          </InputRightElement>
        </InputGroup>
      :
        <ChakraInput 
          id={name}
          name={name}
          focusBorderColor='pink.500'
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900'
          }}
          size="lg"
          {...rest}
        />
      }
    </FormControl>
  )
}