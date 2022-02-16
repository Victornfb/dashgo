import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Victor Nunes</Text>
        <Text color="gray.300" fontSize="small">victornfb@outlook.com</Text>
      </Box>

      <Avatar size="md" name="Victor Nunes" src="https://github.com/Victornfb.png"/>
    </Flex>
  )
}