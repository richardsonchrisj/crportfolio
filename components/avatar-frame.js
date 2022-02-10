import { motion } from "framer-motion"
import { chakra, shouldForwardProp } from "@chakra-ui/react"
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition"
  },
})

const AvatarFrame = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay }}
    mt={20}
    mx="auto"
    textAlign="center"
  >
    {children}
  </StyledDiv>
)

export default AvatarFrame
