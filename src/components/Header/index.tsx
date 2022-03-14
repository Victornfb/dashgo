import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export default function Header() {
  const isScreenLarge = useBreakpointValue({ base: false, lg: true })

  const { onOpen } = useSidebarDrawer()

  return (
    <Flex as="header"
      w="100%"
      maxWidth={1480}
      h="28"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isScreenLarge &&
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          pt="1.5"
        />}
      <Logo />

      { isScreenLarge && <SearchBox /> }

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />

        <Profile showProfileData={isScreenLarge} />
      </Flex>
    </Flex>
  )
}