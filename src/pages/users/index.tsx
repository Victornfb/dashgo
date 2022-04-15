import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useUsers } from "../../hooks/useUsers";

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers()

  const isScreenLarge = useBreakpointValue({base: false, lg: true})

  return (
    <Box>
      <Header/>

      <Flex width="100%" my="6" maxWidth="1480" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bgColor="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" align="center">
            <Heading as="h2" size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/> }
            </Heading>

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

          { isLoading ? (
            <Flex justify="center">
              <Spinner/>
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Nenhum dado encontrado.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4","4","6"]} color="gray.300" w="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isScreenLarge && <Th>Data de cadastro</Th>}
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user) => (
                    <Tr key={user.id}>
                      <Td px={["4","4","6"]} color="gray.300" w="8">
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      {isScreenLarge && <Td>{user.createdAt}</Td>}
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
                  ))}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}