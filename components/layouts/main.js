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
        <meta
          name="description"
          content="Chris Richardson's personal website and portfolio"
        />
        <meta name="author" content="Chris Richardson" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CRichardsonDev" />
        <meta name="twitter:image" content="/card.png" />
        <meta
          property="og:site_name"
          content="Chris Richardson's personal website and portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
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
