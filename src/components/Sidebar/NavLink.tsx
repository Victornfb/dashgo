import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiGitMergeLine } from "react-icons/ri";

interface NavLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}