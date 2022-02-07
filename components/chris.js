import AvatarView from "@sarge/avatar-view"
import { Box, useColorModeValue } from "@chakra-ui/react"
import Typewriter from "typewriter-effect"

const url =
  "https://d1a370nemizbjq.cloudfront.net/2c3a25d8-a3a4-4582-81e7-016842acb0ee.glb"

const Chris = () => {
  return (
    <Box display={{ md: "flex" }}>
      <Box flexGrow={1} my={3} p={1} textAlign="center">
        <AvatarView
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "100%",
          }}
          url={url}
          rotateAvatar
          eyeBlink
          headMovement
        />
      </Box>
      <Box
        delay={0.5}
        flexShrink={0}
        textAlign="left"
        borderRadius="lg"
        borderLeft="solid"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        width={{ base: "100%", md: 200 }}
        height={{ base: 20, md: 200 }}
        my={6}
        p={3}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2500)
              .typeString("Hi, I'm Chris.")
              .pauseFor(2500)
              .typeString(
                " I'm a Senior Instructional Designer and Web Developer."
              )
              .pauseFor(2500)
              .deleteAll()
              .start()
          }}
        />
      </Box>
    </Box>
  )
}

export default Chris
