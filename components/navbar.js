import Logo from "./logo"
import NextLink from "next/link"
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggleButton from "./theme-toggle-button"
import { IoLogoGithub } from "react-icons/io5"

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900")
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        textDecoration={active ? "underline" : "none"}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props) => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#202020380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/bio" path={path}>
            Bio
          </LinkItem>{" "}
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/articles" path={path}>
            Articles
          </LinkItem>
          <LinkItem href="/podcasts" path={path}>
            Podcasts
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/richardsonchrisj/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/bio" passHref>
                  <MenuItem as={Link}>Bio</MenuItem>
                </NextLink>
                <NextLink href="/portfolio" passHref>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/articles" passHref>
                  <MenuItem as={Link}>Articles</MenuItem>
                </NextLink>
                <NextLink href="/podcasts" passHref>
                  <MenuItem as={Link}>Podcasts</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/richardsonchrisj">
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
