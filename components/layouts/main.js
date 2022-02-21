import Head from "next/head"
import dynamic from "next/dynamic"
import NavBar from "../navbar"
import { Box, Container, useColorModeValue, Text } from "@chakra-ui/react"
import Footer from "../footer"
import ChrisLoader from "../chrisloader"
import Typewriter from "typewriter-effect"
// import AvatarFrame from "../avatar-frame"

const LazyChris = dynamic(() => import("../chris"), {
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

        <title>Chris Richardson, PhD</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" minH="100vh" pt={14}>
        <Box>
          <Box
            pos={"absolute"}
            m="50px"
            ml="50%"
            p="5px"
            maxW="400px"
            bg={useColorModeValue("#ffffff40", "#202020380")}
            borderRadius="lg"
          >
            <Text>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi! I'm Chris Richardson.")

                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      "Well, actually I'm Chris's avatar. And I'm still waiting for him to animate me..."
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      "You can drag me around holding the right mouse down or change the view by holding the left button. You can also resize me."
                    )

                    .start()
                }}
              />
            </Text>
          </Box>
          <Box zIndex={"500"}>
            <LazyChris />
          </Box>
        </Box>

        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
