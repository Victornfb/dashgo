import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>

        <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <Stack spacing="4" align="stretch">
          <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>

          <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
        </Stack>
      </NavSection>
    </Stack>
  )
}