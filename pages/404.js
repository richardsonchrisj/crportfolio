import NextLink from "next/link"
import {
  Box,
  Text,
  Heading,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react"
const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center"></Box>
      <NextLink href="/">
        <Button colorScheme="pink">Return to home</Button>
      </NextLink>
    </Container>
  )
}
export default NotFound
export { getInitialProps } from "../components/chakra"
