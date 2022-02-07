import Head from "next/head"
import dynamic from "next/dynamic"
import NavBar from "../navbar"
import { Box, Container } from "@chakra-ui/react"
import Footer from "../footer"
import ChrisLoader from "../chrisloader"
import Chris from "../chris"

const LazyChrisLoader = dynamic(() => import("../chris"), {
  ssr: false,
  loading: () => <ChrisLoader />,
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chris's homepage" />
        <meta name="author" content="Chris Richardson, PhD" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@crichardsondev" />
        <meta name="twitter:creator" content="@crichardsondev" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Chris Richardson's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Chris Richardson - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Chris />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
