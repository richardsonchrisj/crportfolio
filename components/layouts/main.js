import Head from "next/head"
import Navbar from "../navbar"
import { Box, Container } from "@chakra-ui/react"
import Footer from "../footer"

import Chris from "../chris"
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Chris Richardson, PhD</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={75}>
        <Chris />

        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
