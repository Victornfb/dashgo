import { Button, FormControl, FormErrorMessage, FormLabel, Icon, Input as ChakraInput, InputGroup, InputProps as ChakraInputProps, InputRightElement } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
  type: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, type, error = null, ...rest }: InputProps, ref) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      { type === "password" ?
        <InputGroup size='lg'>
          <ChakraInput
            id={name}
            name={name}
            type={show ? 'text' : 'password'}
            focusBorderColor='pink.500'
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: 'gray.900'
            }}
            size="lg"
            ref={ref}
            {...rest}
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
          ref={ref}
          {...rest}
        />
      }

      {!!error &&
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      }
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)