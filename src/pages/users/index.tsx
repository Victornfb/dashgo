import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";

export default function UserList() {
  const isScreenLarge = useBreakpointValue({base: false, lg: true})

  return (
    <Box>
      <Header/>

      <Flex width="100%" my="6" maxWidth="1480" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bgColor="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" align="center">
            <Heading as="h2" size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              cursor="pointer"
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4","6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isScreenLarge && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4","6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Nunes</Text>
                    <Text fontSize="sm" color="gray.300">victornfb@outlook.com</Text>
                  </Box>
                </Td>
                {isScreenLarge && <Td>07 de Fevereiro, 2022</Td>}
                <Td px="2">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blackAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" ms="0.5rem" />}
                    cursor="pointer"
                  >
                    {isScreenLarge && (`${'Editar'}`)}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["4","4","6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Nunes</Text>
                    <Text fontSize="sm" color="gray.300">victornfb@outlook.com</Text>
                  </Box>
                </Td>
                {isScreenLarge && <Td>07 de Fevereiro, 2022</Td>}
                <Td px="2">
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="blackAlpha"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" ms="0.5rem" />}
                  cursor="pointer"
                  >
                    {isScreenLarge && (`${'Editar'}`)}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["4","4","6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Nunes</Text>
                    <Text fontSize="sm" color="gray.300">victornfb@outlook.com</Text>
                  </Box>
                </Td>
                {isScreenLarge && <Td>07 de Fevereiro, 2022</Td>}
                <Td px="2">
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="blackAlpha"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" ms="0.5rem" />}
                  cursor="pointer"
                  >
                    {isScreenLarge && (`${'Editar'}`)}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}