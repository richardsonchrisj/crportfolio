import { Text, useColorModeValue, Box } from "@chakra-ui/react"
import Typewriter from "typewriter-effect"

const Bubble = () => {
  const logo = `/images/square.png`

  return (
    <Box
      pos="relative"
      boxShadow="md"
      zIndex={2}
      m={5}
      mt={"5%"}
      ml={["2%", "10%", "60%"]}
      p={4}
      w={"40%"}
      minH={"5%"}
      bg={useColorModeValue("#ffffff40", "#ffffff40")}
      borderRadius="50"
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString("Hi! I'm Chris.")

            .pauseFor(2500)
            .deleteAll()
            .typeString("Well, actually I'm Chris's avatar.")
            .pauseFor(2500)
            .deleteAll()
            .typeString(
              "You can drag me around holding the right mouse button."
            )

            .pauseFor(2500)
            .deleteAll()
            .typeString(
              "Or you can change the camera by holding the left button."
            )
            .pauseFor(2500)
            .deleteAll()

            .start()
        }}
      />
    </Box>
  )
}

export default Bubble
